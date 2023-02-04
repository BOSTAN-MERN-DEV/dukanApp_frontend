
import "./header"
export const SearchBar = ()=> {
  
  return (
    <div className="container mt-3">
      <ul className="nav nav-pills d-flex justify-content-between">
         <li className="nav">
           <img src="img.png" class="rounded" alt="Cinque Terre" width="200" height="50"/> 
         </li>
      <li className="nav-item d-flex search-btn">
           <input type="text"  className=' fs-5 border border-round' name="" placeholder='Search'></input>
           <button type="button" className="btn1 fs-5">Warning</button>
      </li>
       <div className="useraccount">
       <li className="my-account mt-1">
          <a className=" fs-5 account " href="#">My Account</a>
      </li>
      <li className="cart-shop">
           <i class="fa fa-shopping-cart fs-1 " aria-hidden="true"></i>
      </li>
       </div>
    </ul>
  </div>
  );
}