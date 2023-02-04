
import "./orderconfirmation.css"
export const OrderConfirmation = () => {
    return(
      <>
      <div className="container mt-5">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Products</th>
      <th scope="col">Proce</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    
   
  </tbody>
</table>
</div>
        
        <div className="container mt-5">
              <div className="row ">
                  <div className="col-sm-6 d-flex ">
                    <img src="images.jpg" class="rounded" alt="Cinque Terre" width="200" height="250"/>
                      <p className="d-flex align-items-center">This is product order</p>
                        </div>
            <div className="col-sm-3 d-flex justify-content-around align-items-center">
              <p className="text-warning">$72.00</p>
                  <div className="calculate">
                      <p className="plus">- 1 +</p>
                  </div>
                </div>
    <div className="col-sm-3 d-flex justify-content-end align-items-center"><p className="text-warning">$72.00</p></div>     
         </div>
           <div className=" bg-warning rounded-pill mt-5">
             <h5 className="text-center text-light p-2">Continue Shopping</h5>
               </div>
      </div>
  
        <div className="container d-flex justify-content-between mb-5">
          <div className="instruction">
            <p className=""></p>
              <div class="form-group">
              <label for="exampleFormControlTextarea1">Order Special instruction</label>
      <textarea className="form-control col-12" id="exampleFormControlTextarea1" rows="4"></textarea>
    </div>
          </div>
             <div className="subtotal">
              <p className="d-flex justify-content-end total">Subtotal  $72.00</p>
                <p className="d-flex justify-content-end">Test and Shipping calculating at Checkout</p>
                  <div className=" bg-warning rounded-pill">
                 <h5 className="text-center text-light p-2">Continue Shopping</h5>
            </div>
          </div>
        </div>
      </>
      
    )
}