import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/slices/category";

export const Category = () => {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const addCategory = () => {
        dispatch(add({ id: 2, name: "mobile" }))
    }

    return (
        <div>
            <div>Category Component</div>
            <div>{
                categories.map((category, key) => <div key={key}>Name: {category.name}</div>)
            }</div>

            <button onClick={addCategory}>Add category</button>
        </div>
    );
}