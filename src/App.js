import logo from './logo.svg';
import './App.css';
import {HashRouter,BrowserRouter,Routes,Route} from "react-router-dom"
import NavbarOk from "./Components/Navbar/Navbar"
import Home from "./Components/Pages/Home"
import Products from "./Components/Pages/Products"
import Detail from "./Components/Pages/Detail"
import Category from "./Components/Pages/Category"
import ContextContainer from './Context/Context';
import Cart from "./Components/Pages/Cart"
import Contact from "./Components/Pages/Contact"
import Footer from './Components/Pages/Footer';
import Services from "./Components/Pages/Services"
import Us from "./Components/Pages/Us"
import Buy from "./Components/Pages/Buy"
import { useEffect } from 'react';


function App() {

  useEffect(()=>{
    document.title="Serigrafia!!"
  },[])
  return (
    <div className="App">
       <ContextContainer>
       <div className="content">
      <BrowserRouter>
      <header className="App-header">
       <NavbarOk/>
      </header>
     
      <main className="main">
     
        <Routes >
        <Route path={"/serigrafia"} element={<Home/>}/>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/serigrafia"} element={<Home/>}/>
          <Route path={"/productos"} element={<Products/>}/>
          <Route path={"/productos/detalle/:id"} element={<Detail/>}/>
          <Route path={"/productos/categoria/:category"} element={<Category/>}/>
          <Route path={"/servicios"} element={<div><Services/></div>}/>
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/nosotros"} element={<div><Us/></div>}/>
          <Route path={"/contacto"} element={<Contact/>}/>
          <Route path={"/comprar"} element={<Buy/>}/>
        
      


        
        </Routes>
       
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
      </div>
      </ContextContainer>
     
    </div>
  );
}

export default App;
