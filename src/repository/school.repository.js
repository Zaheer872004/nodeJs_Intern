import { prisma } from "../dbConfig/dbConfig.js";
import { ApiError } from "../helper/ApiError.js";

class SchoolRespository {




  createNewSchool = async (name,address,latitude,longitude) => {

    try {
      
      const newSchool = await prisma.school.create({
        data: {
          name,
          address,
          latitude,
          longitude
        }
      })

      console.log(newSchool)
  
      return newSchool;
  

    } catch (error) {
      
      throw new ApiError(500, error.message);
    }

  }


  findAllSchools = async (latitude, longitude) => {

    return await prisma.school.findMany();

  }


}


export const schoolRepository = new SchoolRespository()