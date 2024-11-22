import { ApiError } from "../helper/ApiError.js";
import { schoolRepository } from "../repository/school.repository.js";
import { calculateDistance } from "../helper/CalculateDistance.js";

class SchoolService {




  createSchool = async (data) => {

    const { name, address, latitude, longitude } = data;

    if (
      [name, address]
        .some((x) => typeof x === 'string' && x.trim() === "") ||
      typeof latitude !== 'number' ||
      typeof longitude !== 'number'
    ) {
      throw new ApiError(400, "All fields are required and latitude/longitude must be valid numbers");
    }



    try {

      // here creating a new school
      const newSchool = await schoolRepository.createNewSchool(name, address, latitude, longitude);

      if (!newSchool) {
        throw new ApiError(400, "school creation failed")
      }

      return newSchool;

    } catch (error) {
      throw new ApiError(500, error.message);
    }
  }


  getAllSchools = async (latitude, longitude) => {

    // validation for latitude and longitude
    if([latitude, longitude].some((x) => typeof x !== 'number' && x.trim() === "")){
      throw new ApiError(400, "latitude/longitude must be valid numbers");
    }

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || isNaN(lon)) {
      throw new ApiError(400, "latitude/longitude must be valid numbers");
    }


    try {

      const schools = await schoolRepository.findAllSchools(latitude, longitude);

      if(!schools){
        throw new ApiError(400, "No schools found")
      }

      const schoolsWithDistance = schools.map( school => {

        const distance = calculateDistance(lat, lon, school.latitude, school.longitude);
        return { ...school, distance }; 

      })

      schoolsWithDistance.sort((a, b) => a.distance - b.distance);


      console.log("School Data here : "+schoolsWithDistance)

      return schoolsWithDistance;

      
    } catch (error) {
      throw new ApiError(500, error.message);
    }



  }




}

export const schoolService = new SchoolService()