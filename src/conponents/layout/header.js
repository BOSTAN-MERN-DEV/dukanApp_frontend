import { Link } from "react-router-dom";
// import "./header.css"
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
            {/* <Navbar.Brand href="#home"> */}
            <img src={`${process.env.PUBLIC_URL}/assets/images/app-logo.svg`} width="30" height="30"
                className="d-inline-block m-3" alt="Dukan App logo"
            />

            <Nav className="link">{dukanAppNav.map((item, key) => <Nav.Link>{item}</Nav.Link>)}</Nav>

            {/* <Nav className="me-auto">
                        
                        {dukanAppNav.map((tiem, key) => <Nav.Link key={key}> {item}</Nav.Link>)}
                    </Nav> */}
            {/* </Navbar.Brand> */}
        </Navbar>

        // <header>
        //     <div className="logo">Logo</div>

        //     <nav>
        //         <ul>
        //             {
        //                 dukanAppNav.map((link, key) => {
        //                     return <li key={key}>{link}</li>
        //                 })
        //             }
        //         </ul>
        //     </nav>

        //     <div className="login-user">LoginUser</div>
        // </header>
    );
}