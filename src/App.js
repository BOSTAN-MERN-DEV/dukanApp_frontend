import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import './main.css'
import { Home } from './conponents/home';
import { Layout } from './conponents/layout';
import { Product } from './conponents/product';
import { Category } from './conponents/category';
import { About } from './conponents/about';
import { Contact } from './conponents/contact';
import { NotFound } from './conponents/notFound';
// import { Login } from './conponents/login';
// import { Singup } from './conponents/signup';
// import { Order } from './conponents/order';
// import { Order } from './conponents/order';

// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import logo from "../public/images/app-logo.svg"


function App() {

  return (
    // <Navbar bg="primary" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={`${process.env.PUBLIC_URL}/assets/images/app-logo.svg`}
    //         width="30"
    //         height="30"
    //         className="d-inline-block align-top"
    //         alt="React Bootstrap logo"
    //       />
    //     </Navbar.Brand>
    //   </Container>
    // </Navbar>


    // <div className='container'>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path='/home' element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    //   <h1>User Signup</h1>
    //   <Singup />

    //   <h1>Login User</h1>
    //   <Login />

    //   <div>Order List</div>
    //   <Order />
    // </div>
  );
}

export default App;
