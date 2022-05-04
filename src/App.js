import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import AuthRequire from './Pages/Login/AuthRequire/AuthRequire';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyProducts from './Pages/MyProducts/MyProducts';
import Product from './Pages/Product/Product';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import About from './Pages/About/About';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/add-inventory' element={
          <AuthRequire>
            <AddInventory />
          </AuthRequire>
        } />
        <Route path='/manage-inventory' element={
          <AuthRequire>
            <ManageInventory />
          </AuthRequire>
        } />
        <Route path='/my-products' element={
          <AuthRequire>
            <MyProducts />
          </AuthRequire>
        } />
        <Route path='/inventory/:id' element={
          <AuthRequire>
            <Product />
          </AuthRequire>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/reset-password' element={<ResetPassword />} />



        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
      {/* react toastify container */}
      <ToastContainer />


    </>
  );
}

export default App;
