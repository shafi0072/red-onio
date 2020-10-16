import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import AllFoods from "./Components/AllFoods/AllFoods";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import NotFound from "./Components/NotFound/NotFound";
import ParticularItemDetails from "./Components/ParticularItemDetails/ParticularItemDetails";
import TopBanner from "./Components/TopBanner/TopBanner";
import { AuthContextProvider } from "./Components/Login/useAuth";
import AddData from "./Components/AddData/AddData";
import Footer from "./Components/Footer/Footer";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const cartHandler = (data) => {
    console.log(data);
    const addedAlready = cart.find((cart) => cart.key === data.key);
    const newCart = [...cart, data];
    setCart(newCart);
    if (addedAlready) {
      const remainingCart = cart.filter((cart) => cart.key !== data);
      setCart(remainingCart);
    } else {
      const newCart = [...cart, data];
      setCart(newCart);
    }
  };

  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar cart={cart}></Navbar>
              <TopBanner></TopBanner>
              <AllFoods cart={cart}></AllFoods>
              <Footer/>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>

            <Route path="/food/:key">
              <Navbar cart={cart}></Navbar>
              <ParticularItemDetails
                cartHandler={cartHandler}
              ></ParticularItemDetails>
            </Route>

            <Route path="/addData">
              <AddData></AddData>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
