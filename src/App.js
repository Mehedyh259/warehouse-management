import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyProducts from './Pages/MyProducts/MyProducts';
import Product from './Pages/Product/Product';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/manage-inventory' element={<ManageInventory />} />
        <Route path='/my-products' element={<MyProducts />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />



        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />
      {/* react toastify container */}
      <ToastContainer />


    </>
  );
}

export default App;
