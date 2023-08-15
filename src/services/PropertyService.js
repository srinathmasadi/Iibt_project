import { ApiConstants } from "../constants";
import axios from "axios";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store";

const getProperties = async () => {
    console.log(`PropertiesService | getProperties`);
    try {
      let propertyResponse = await axios.get(
        `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.PROPERTY}`,
        {
          headers: authHeader(getToken()),
        },
      );
      if (propertyResponse?.status === 200) {
        return {
          status: true,
          message: `Property data fetched`,
          data: propertyResponse?.data?.data,
        };
      } else {
        return {
          status: false,
          message: `Property data not found`,
        };
      }
    } catch (error) {
      console.log("Error in property service",error)
      return {
        status: false,
        message: `Property data not found`,
      };
    }
  };

  const addProperty = async (property) => {
    try {
      if(!property?.name||
        !property?.address||
        !property?.image||
        !property?.location||
        !property?.price||
        !property?.rent){
          return {
              status:false, message: "Please fill up all fields"
          }
      }
       let requestBody = {
            name:property.name,
            address:property.address,
            image:property.image,
            location:property.location,
            price:property.price,
            rent:property.rent
       }
       let propertyResponse = await axios.post(
        `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.PROPERTY}/addData`,
        requestBody,
        {
          headers: authHeader(getToken()),
        }, 
           
        );
        console.log("Property Response",propertyResponse?.data)
        return propertyResponse?.data
    } catch (error) {
        console.log(error)
        return {status: false, message: "Oops! Something went wrong"}
    }
}

export default {getProperties, addProperty}
