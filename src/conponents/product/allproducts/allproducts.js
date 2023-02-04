import React, { useEffect, useState } from 'react'
import './allproducts.css'

export const Allproducts =()=>{
    const [products, setproducts] = useState([]);
    const allproduct = async()=>{
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setproducts(data.products);
    }
    // console.log(products)
    useEffect(()=>{
        allproduct();
    },[])
  return (

     <div className="row">
        {products.map((item, key)=>{
            return(
                <div className='col-3 py-2'>
                    <div className= "card">
                        <img className="product-image" src={item.thumbnail} alt="Product Image"></img>
                        <div className="title">
                            <h6>{item.title.slice(0, 20)}..</h6>
                            <p><span>{item.brand}</span></p>
                            <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}</p>
                            <div className="button"> <button>SELECT OPTION</button></div>
                        </div>
                        
                    </div>
                    
                    
                </div>
            
            )
        })}
            
    </div>

       
   
  )
}



<div className= "card">
        <div className="card-warpper">
            <img className="product-image"
            src="" alt="Product Image"
            ></img>
            <div className="title">
                <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                <p><span>Diamond</span></p>
                <p>$240.00</p>
           </div>
            <div className="button"> <button>SELECT OPTION</button></div>
        </div>
     </div> 
