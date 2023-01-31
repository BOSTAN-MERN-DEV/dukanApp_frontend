// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { allOrder, orderById } from "../../redux/slices/order";
// import Button from 'react-bootstrap/Button';

// export const Order = () => {
//     const order = useSelector(state => state.order);
//     console.log(order)
//     const dispatch = useDispatch();

//     const getAllOrder = async () => {
//         dispatch(allOrder());
//     }

//     const getOrderById = (Order_id) => {
//         dispatch(orderById(Order_id));
//     }

//     useEffect(() => {
//         getAllOrder();
//     }, []);

//     return (
//         <div>
//             <Button variant="primary">Primary</Button>{' '}
//             <Button variant="secondary">Secondary</Button>{' '}
//             <Button variant="success">Success</Button>{' '}
//             <Button variant="warning">Warning</Button>{' '}
//             <Button variant="danger">Danger</Button>{' '}
//             <Button variant="info">Info</Button>{' '}
//             <Button variant="light">Light</Button>{' '}
//             <Button variant="dark">Dark</Button>
//             <Button variant="link">Link</Button>
//         </div>

//         // < div >
//         //     <div>Get Order By Id</div>
//         //     <button onClick={() => getOrderById(11)}>GetOrderByID</button>

//         //     {order.orders?.map((item, key) => {
//         //         return (
//         //             <li key={key}>{`p_title: ${item.product_title} seller_name: ${item.seller_name}`}</li>
//         //         );
//         //     })}
//         // </div >
//     );
// }
