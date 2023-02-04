import { RestFulService } from "../restApi";
import { genericResponse, restApiEndPoint } from "../utils";



export class CategoryService extends RestFulService {
    // Get All Categorys
    getAllCategory = async ()=>{
        try {
            const url = `${restApiEndPoint.GETCATEGORYS}`;
            const result = await this.get(url);
            return genericResponse(result);
        } catch (err) {
            return (err);
        }
    }

}


