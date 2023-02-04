import { RestFulService } from "../restApi";
import { genericResponse, restApiEndPoint } from "../utils";

export class OrderService extends RestFulService {
    //GET ALL ORDERS
    getAllOrder = async () => {
        try {
            const url = `${restApiEndPoint.GETORDERS}`;
            const result = await this.get(url);

            return genericResponse(result);
        } catch (err) {
            return (err);
        }
    }

    //GET ORDER BY ID
    getOrderById = async (order_id) => {
        try {
            debugger
            const url = `${restApiEndPoint.GETORDERS}/${order_id}`
            const result = await this.get(url);

            return genericResponse(result);
        } catch (error) {
            return (error);
        }
    }
}