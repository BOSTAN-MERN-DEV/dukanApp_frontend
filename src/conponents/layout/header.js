import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    const dukanAppNav = [
        <Link to="/home">Home</Link>,
        <Link to="/product">product</Link>,
        <Link to="/category">Category</Link>,
        <Link to="/contact">Contact</Link>,
        <Link to="/about">About Us</Link>,
    ]

    return (
        <Navbar bg="dark" variant="dark">
            <img src={`${process.env.PUBLIC_URL}/assets/images/app-logo.svg`} width="30" height="30"
                className="d-inline-block m-3" alt="Dukan App logo"
            />

            <Nav className="link">{dukanAppNav.map((item, key) => <Nav.Link key={key}>{item}</Nav.Link>)}</Nav>

           
        </Navbar>

       
    );
}