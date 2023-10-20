import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Asset/Navbar";
import Cart from './Pages/Cart/Cart';
import  Shop  from "./Pages/Shop/Shop";
import Login from "./Pages/Login";
import ShopContextProvider from "./Context/Shop-Context";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <div>
    <ShopContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/signUp" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
