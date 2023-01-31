import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/slices/product";

export const Product = () => {
    let products = useSelector(state => state.products);
    let dispatch = useDispatch();
    const addProduct = () => {
        dispatch(add({ id: 102, title: "new product added" }))
    }
    return (
        <div>
            <div>Product Component</div>

            {products.map((item, key) => {
                return (<p key={key}>id: {item.id} title: {item.title}</p>)
            })}

            <button onClick={addProduct}>AddProduct</button>
        </div>
    );
}
