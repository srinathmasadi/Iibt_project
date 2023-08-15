import { ApiConstants } from "../constants";
import axios from "axios";
import { authHeader } from "../utils/Generator";
import { getToken } from "../Store";

const uploadImage = async (data) => {
    if(!data){
        return {
            status:false, message: "Please fill up all fields"
        }
    }
    try {
       let requestBody = {
            image:data
       }
       let uploadResponse = await axios.post(
        `${ApiConstants.BACKEND_API.BASE_API_URL}${ApiConstants.BACKEND_API.UPLOAD}/uploadImage`,
        requestBody,
        {
          headers: authHeader(getToken()),
        }
        );
        console.log("Upload Response",uploadResponse?.data)
        return uploadResponse?.data
    } catch (error) {
        console.log(error)
        return {status: false, message: "Oops! Something went wrong"}
    }
}

export default {uploadImage}

