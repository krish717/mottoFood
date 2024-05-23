import React, {lazy,Suspense} from "react";
import './index.css';
import Header  from "./components/Header";
import Body from "./components/Body";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Search from "./components/Search"


const Grocery = lazy(()=> import("./components/Grocery"));


const App = () => {
  return (
    <div style={{backgroundColor: "white"}}>
    <Provider store={appStore}>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Body />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/grocery" element={<Suspense fallback={<Shimmer/>}><Grocery /></Suspense>} />
    <Route path="*" element={<Error />} />
    <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
    <Route path="/collection/:colId" element={<Collection />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/search" element={<Search />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </Provider>
    </div>
  );
}


export default App;
