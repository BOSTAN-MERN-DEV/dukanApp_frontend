import { Route, Routes } from 'react-router-dom';
import './App.css';
import './main.css'
import { Home } from './conponents/home';
import { Layout } from './conponents/layout';
import { Product } from './conponents/product';
import { Grocery } from './conponents/grocery';
import { Category } from './conponents/category';
import { About } from './conponents/about';
import { Contact } from './conponents/contact';
import { NotFound } from './conponents/notFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route index path='/home' element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/category" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
