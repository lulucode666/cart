// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './commodity/CartContext';
import NavBar from './NavBar';
import Main from './commodity/Main';
import Checkout from './commodity/Checkout';
import Login from './Icon/Login';
import More from './Icon/More';
import About from './Home/About';
import Home from './Home/Home';
import TyPage from './Icon/TyPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartProvider>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/Main' element={<Main />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/More' element={<More />} />
            <Route path='/TyPage' element={<TyPage />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;