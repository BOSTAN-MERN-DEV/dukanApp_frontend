// import { ENV } from "../../config";
const baseUrl = "//localhost:8000/api"

export const restApiEndPoint = {
    LOGIN: `${baseUrl}/user/login`,
    SIGNUP: `${baseUrl}/user/singup`,
    GETORDERS: `${baseUrl}/order`
}