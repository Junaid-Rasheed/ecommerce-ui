
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages 
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
// components 
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Announcement />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/register' element={<Register />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
