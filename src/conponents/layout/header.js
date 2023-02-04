import { Link } from "react-router-dom";
import "./header.css"

export const Header = () => {
    const dukanAppNav = [
        <Link to="/home">Home</Link>,
        <Link to="/product">product</Link>,
        <Link to="/category">Category</Link>,
        <Link to="/contact">Contact</Link>,
        <Link to="/about">About Us</Link>,
    ]

    return (
        <div className="container mt-5">
        <header>
            <div className="logo">
                <li>grosry shopping</li>
                </div> 
             <nav>
                <ul>
                    {
                        dukanAppNav.map((link, key) => {
                            return <li key={key}>{link}</li>
                        })
                    }
                </ul>
            </nav>
         </header>
        
        </div>
        
    );
}


