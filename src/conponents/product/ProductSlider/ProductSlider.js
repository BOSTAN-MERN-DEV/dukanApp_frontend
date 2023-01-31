import './ProductSlider.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="container">
        
          <div className="title-wrapper-with-link">
            <h2 className="title">Tranding Product</h2>
          </div>
            <Carousel responsive={responsive}>

              
              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"
                  ></img>
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p><span>Diamond</span></p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>

              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"
                  ></img>
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p><span>Diamond</span></p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>

              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"
                  ></img>
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p><span>Diamond</span></p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>

              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"></img>
                  
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p><span>Diamond</span></p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>

              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"
                  ></img>
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p><span>Diamond</span></p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>

              <div className="card">
                <div className="card-warpper">
                  <img className="product-image"
                    src="https://cdn.shopify.com/s/files/1/0660/9960/9859/products/5_26cef73d-72c8-413e-a0ee-8945cb9f63af_1044x.jpg?v=1663822495" alt="Product Image"
                  ></img>
                  <div className="title">
                    <p>Vadilal Quick Mixed Vegetables Frozen Pack</p>
                    <p>Diamond</p>
                    <p>$240.00</p>
                  </div>
                  <div className="button"> <button>SELECT OPTION</button></div>
                </div>
              </div>
            </Carousel>
          </div>
    </>

  )
}

