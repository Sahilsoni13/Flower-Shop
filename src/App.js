
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Category from './pages/category.js';
import Product from './pages/product.js';
import Subscription from './pages/subscription.js';
import Aboutus from './pages/aboutus.js';
import Contactinfo from './pages/contactinfo.js';
import Cart from './pages/cart.js';
import Header from './components/common/header.js';
import Footer from './components/common/footer.js';
import Home from './pages/home.js';
import Contact from './components/home/contact.js';
import Signin from './pages/signin.js';

function App() {
  return (
  <>
  {/* <Header/> */}
  <BrowserRouter>  
  <Routes>
    <Route element={<Header/>} path=''>
      <Route element={<Home/>} path='/'/>
      <Route element={<Category/>} path='/category'/>
      <Route element={<Product/>} path='/product'/>
      <Route element={<Subscription/>} path='/subscription'/>
      <Route element={<Aboutus/>} path='/aboutus'/>
      <Route element={<Contactinfo/>} path='/contactinfo'/>
      <Route element={<Cart/>} path='/cart'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Signin/>} path='/signin'/>
    </Route>
    
    

      
    
  </Routes>
  </BrowserRouter>
  <Footer/>
  </>
  );
}

export default App;
