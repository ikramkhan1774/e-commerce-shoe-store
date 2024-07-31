import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Register from "./component/Register";
import NotFound from "./component/NotFound";
import Login from "./component/Login";
import AdminPanel from "./component/AdminPanel/AdminPanel";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./component/Cart";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./component/HomePage";
import Products from "./component/Products";
import User from "./component/AdminPanel/Users";
import Notification from "./component/AdminPanel/notification";
import Messages from "./component/AdminPanel/messages";
// import Settings from "./component/AdminPanel/settings";
import Adds from "./component/AdminPanel/adds";
import CreateAdd from "./component/AdminPanel/CreateAdd";
import ProductDetails from "./component/ProductDetails";
import AllProducts from "./component/category/AllProducts";
import WomenShoes from "./component/category/WomenShoes";
import MensShoes from "./component/category/MensShoes";
import Bags from "./component/category/Bags";
import KidsShoes from "./component/category/KidsShoes";
import Success from "./component/Success";
import Cancel from "./component/Cancel";

function App() {
  const [userLoggedIn, SetUserLoggedIn] = useState(false);
  // const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .post("/checkSession", { abc: token })
        .then((res) => {
          if (res.data) {
            SetUserLoggedIn(res.data);
          }
        })
        .catch((error) => {
          console.error("Session check failed:", error);
        });
    } else {
      console.log("No token found in local storage.");
    }
  }, []);

  return (
    <div id='body'>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Navbar
          userLoggedIn={userLoggedIn}
          SetUserLoggedIn={SetUserLoggedIn}></Navbar>
        <main>
          <Routes>
            <Route
              path='/'
              element={
                <HomePage
                  userLoggedIn={userLoggedIn}
                  setUserLoggedIn={SetUserLoggedIn}></HomePage>
              }></Route>
            <Route
              path='/products'
              element={<Products userLoggedIn={userLoggedIn}></Products>}>
              <Route
                path=''
                element={<AllProducts userLoggedIn={userLoggedIn} />}></Route>
              <Route
                path='womens_shoes'
                element={<WomenShoes userLoggedIn={userLoggedIn} />}></Route>
              <Route
                path='mens_shoes'
                element={<MensShoes userLoggedIn={userLoggedIn} />}></Route>
              <Route
                path='kids_shoes'
                element={<KidsShoes userLoggedIn={userLoggedIn} />}></Route>
              <Route
                path='bags'
                element={<Bags userLoggedIn={userLoggedIn} />}></Route>
              <Route
                path=':id'
                element={
                  <ProductDetails userLoggedIn={userLoggedIn} />
                }></Route>
            </Route>
            <Route path='cart' element={<Cart></Cart>}></Route>

            <Route path='admin' element={<AdminPanel></AdminPanel>}>
              <Route path='users' element={<User></User>}></Route>
              <Route path='messages' element={<Messages></Messages>}></Route>
              <Route path='adds' element={<Adds></Adds>}></Route>
              <Route
                path='notifications'
                element={<Notification></Notification>}></Route>
              <Route path='createAdd' element={<CreateAdd></CreateAdd>}></Route>
            </Route>

            <Route
              path='login'
              element={
                <Login SetUserLoggedIn={SetUserLoggedIn}></Login>
              }></Route>
            <Route path='register' element={<Register></Register>}></Route>

            <Route path='/success' element={<Success></Success>}></Route>
            <Route path='/cancel' element={<Cancel></Cancel>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
