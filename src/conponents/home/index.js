import { BannerInner } from "../bannerInner/bannerInner";
import { ImageSlider } from "../ImageSlider/imageSlider";
import { ProductSlider } from "../product/ProductSlider/ProductSlider";

// import {ImageSlider} from './conponents/ImageSlider/imageSlider'
export const Home = () => {
    return (
        <>
         <ImageSlider/> 
        <ProductSlider/>
        <BannerInner/>

        </>
    
    
    );
}