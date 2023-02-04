import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allOrder, orderById } from "../../redux/slices/order";

export const Order = () => {
    const order = useSelector(state => state.order);

    const dispatch = useDispatch();

    const getAllOrder = async () => {
        dispatch(allOrder());
    }

    const getOrderById = (Order_id) => {
        dispatch(orderById(Order_id));
    }

    useEffect(() => {
        getAllOrder();
    }, []);

    return (
        < div >
            <div>Get Order By Id</div>
            <button onClick={() => getOrderById(11)}>GetOrderByID</button>

            {order.orders?.map((item, key) => {
                return (
                    <li key={key}>{`p_title: ${item.product_title} seller_name: ${item.seller_name}`}</li>
                );
            })}
        </div >
    );
}
