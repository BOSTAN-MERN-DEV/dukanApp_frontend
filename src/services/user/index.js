import { RestFulService } from "../restApi";
import { genericResponse, restApiEndPoint } from "../utils";

export class UserService extends RestFulService {
    //REGISTER USER
    signup = async data => {
        try {
            const url = `${restApiEndPoint.SIGNUP}`;
            const response = await this.post(url, data);
            return genericResponse(response);
        } catch (error) {
            return genericResponse(error);
        }
    };

    //LOGIN USER
    login = async (data) => {
        try {
            debugger
            const url = `${restApiEndPoint.LOGIN} `
            let result = await this.post(url, data);
            return genericResponse(result);

        } catch (err) {
            console.log(err);
            return genericResponse(err);
        }
    }
}