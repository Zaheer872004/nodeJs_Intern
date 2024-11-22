import { ApiResponse } from "../helper/ApiResponse.js";
import { ApiError } from "../helper/ApiError.js";
import { schoolService } from "../service/school.service.js";

class SchoolController {



  healthCheck = async (req,res) => {

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          null,
          "Everything is fine"
        )
      )

  }




  createSchool = async (req, res) => {


    try {

      // console.log("done till here above of response")

      const response = await schoolService.createSchool(req.body)

      console.log(response +"done till here below of response")

      if(!response){
        throw new ApiError(400, "school creation failed")
      }

      return res
        .status(201)
        .json(
          new ApiResponse(
            201,
            response,
            "school created successfully"
          )
        )

      
    } 
    catch (error) {
      
      throw new ApiError(500, error.message)


    }


  }


  getAllSchools = async (req, res) => {

    const { latitude, longitude } = req.query;

    const response = await schoolService.getAllSchools(latitude, longitude);

    if(!response){
      throw new ApiError(400, "No schools found")
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          response,
          "All schools found Successfully"
        )
      )


  }









}


export const schoolController = new SchoolController()