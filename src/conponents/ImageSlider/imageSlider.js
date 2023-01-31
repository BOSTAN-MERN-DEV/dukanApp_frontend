import React from 'react'
import "./ImageSlider.css"

export const ImageSlider = () => {
    return (
        <div>
            <div class="top-content">

                <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="https://cdn.shopify.com/s/files/1/0660/9960/9859/files/main-banner-02_1903x.jpg?v=1662368743;" class="d-block w-100" alt="..." />
                            <div className="slideshow-text">
                                <div className="slideshow-slidetitle">
                                    Various Beans
                                    <br />
                                    Mix Peas Agriculture Of
                                    <br />
                                    Natural Food
                                </div>
                                <div className="slideshow-subheading">
                                    Up To 50% Off Best Selling At <span>$199.00</span>
                                </div>
                                <div className="slideshow-btn-wrapper">
                                    <a href="#" className="btn slideshow-btn button"> Shop Now</a>
                                </div>
                            </div>

                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="https://cdn.shopify.com/s/files/1/0660/9960/9859/files/main-banner-01_1903x.jpg?v=1662368744;" class="d-block w-100" alt="..." />
                            <div className="slideshow-text">
                                <div className="slideshow-slidetitle">
                                    Healthy Fruits
                                    <br />
                                    & Vegetables and Dried
                                    <br />
                                    Fruits Table
                                </div>
                                <div className="slideshow-subheading">
                                Up To 40% Off Best Selling At <span>$199.00</span>
                                </div>
                                <div className="slideshow-btn-wrapper">
                                    <a href="#" className="btn slideshow-btn button"> Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    )
}