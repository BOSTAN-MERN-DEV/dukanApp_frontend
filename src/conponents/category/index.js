// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../redux/slices/category";

// export const Category = () => {
//     const categories = useSelector(state => state.categories);
//     const cards = useSelector(state => state.cards);
//     console.log("card>>>>>>>>>>>>>>>>>>>>>>>>", cards);
//     const dispatch = useDispatch();

//     const addCategory = () => {
//         dispatch(add({ id: 2, name: "mobile" }))
//     }

//     return (
//         <div>
//             <div>Category Component</div>
//             <div>{
//                 categories.map((category, key) => <div key={key}>Name: {category.name}</div>)
//             }</div>

//             <button onClick={addCategory}>Add category</button>
//         </div>
//     );
// }

import { Filterproducts } from '../fileterproducts/filterproducts'
import { Pagination } from '../pagination/pagination'
import { Allproducts } from '../product/allproducts/allproducts'
import './index.css'
export const Category =()=>{
  return (
   <>
        <section>
            <div className="grocery-pg-benner">
                <img src="https://cdn.shopify.com/s/files/1/0660/9960/9859/files/bradcumb_1.jpg?v=1663848677" alt="image benner"/>
                <div className="banner-main-hadding">
                    <h2>Procuts</h2>
                </div>
            </div>
        </section>
         <div className='container-fluid '>
        <div className='inner-container' >
            <div className='row'>
                <div className='col-3'>
                <Filterproducts/>
                </div>
                <div className='col-9'>
                    <div className='row'>
                        <h1>hjkdhdgkh</h1>
                    </div>
                    <div className='row'>
                    <Allproducts/>
                    </div>
                        <div className='row'>
                         <Pagination/>
                         </div>
                </div>
            </div>
        </div>
    </div>
   
    </>
  )
}



