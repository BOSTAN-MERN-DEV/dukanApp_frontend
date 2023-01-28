import { Route, Routes } from 'react-router-dom';
import './App.css';
import './main.css'
import { Home } from './conponents/home';
import { Layout } from './conponents/layout';
import { Product } from './conponents/product';
import { Category } from './conponents/category';
import { About } from './conponents/about';
import { Contact } from './conponents/contact';
import { NotFound } from './conponents/notFound';
import { Login } from './conponents/login';
import { Singup } from './conponents/signup';

function App() {

  return (
    <div className='container'>
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
      <h1>User Signup</h1>
      <Singup />

      <h1>Login User</h1>
      <Login />
    </div>
  );
}

export default App;
