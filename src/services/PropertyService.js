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
export default {getProperties}
