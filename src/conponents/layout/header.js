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
        <header>
            <div className="logo">Logo</div>

            <nav>
                <ul>
                    {
                        dukanAppNav.map((link, key) => {
                            return <li key={key}>{link}</li>
                        })
                    }
                </ul>
            </nav>

            <div className="login-user">LoginUser</div>
        </header>
    );
}