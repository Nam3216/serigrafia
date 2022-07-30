import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import Navbar from'react-bootstrap/Navbar'
import Container from'react-bootstrap/Container'
import Nav from'react-bootstrap/Nav'
import NavDropdown from'react-bootstrap/NavDropdown'   
import InstagramIcon from '@mui/icons-material/Instagram'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CartWidget from "./CartWidget"



const NavbarOk=()=>{
    const[checkSticky,setCheckSticky]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",Sticky)
        return()=>{
        window.removeEventListener("scroll",Sticky)
        }

    },[])
    
    
    const Sticky=()=>{
        if(window.scrollY>50){
           
            setCheckSticky(true)
            console.log("stciky")
        }
        if(window.scrollY<50){
            
            setCheckSticky(false)
            console.log("normal")
        }

    }
    // <Navbar.Brand href="#home">La Casa Del Planograf</Navbar.Brand>
    // collasible-nav-dropdown esto en navbar bg="dark"
    //<img src="logo.gif" style={{width:90}}/>
    return(
        <div >
          <Navbar  id={checkSticky==true ?"navbar-sticky" : "nav"} expand="lg"  variant="dark" fixed="top" >
              <Container>
              <Navbar.Brand href="/">Seri-Grafia</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto" id= "nav" >
                  <Nav.Link href="#features"><Link to={"/"} className="link"> Inicio</Link></Nav.Link>
                
                  <NavDropdown title="Productos" id="desplegable">
                    <NavDropdown.Item href="#action/3.1"><Link to={"/productos"}>Todos los Productos</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"> <Link to={"productos/categoria/tintas"}>Tintas</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><Link to={"productos/categoria/limpiadores"}>Limpiadores</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><Link to={"productos/categoria/schablones"}>Schablones</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><Link to={"productos/categoria/servicios"}>Servicios</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><Link to={"productos/categoria/otros"}>Otros</Link> </NavDropdown.Item>
                
                  
                  </NavDropdown>

                  <Nav.Link ><Link to={"/cart"} className="link">Cart</Link> </Nav.Link>
                  
                  <Nav.Link ><Link to={"/nosotros"} className="link"> Nosotros</Link></Nav.Link>
                  <Nav.Link ><Link to={"/contacto"} className="link"> Contacto</Link></Nav.Link>
                  <CartWidget/>
                </Nav>
                <Nav id="nav-b">
                <Nav.Link > Compartir en: </Nav.Link>
                  <Nav.Link href="http://www.facebook.com/sharer.php?u=www.google.com&t=Planograf" target="_blank"><FacebookIcon/></Nav.Link>
                  <Nav.Link  href="https://twitter.com/intent/tweet?text=Visita%20a%el%mejor%sitio%sobre%Serigrafia%20en%20Twitter&url=http%3A%2F%2Fparzibyte.me%2Fblog&via=parzibyte&hashtags=programación,html" target="_blank">
                    <TwitterIcon/>
                  </Nav.Link>
                  <Nav.Link > Visitanos: </Nav.Link>
                  <Nav.Link eventKey={2} href="www.instagram.com">
                  <InstagramIcon/>
                  
                  </Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
             </Container>
           
        </Navbar>
        </div>
    )
}

export default NavbarOk

/*  <div className="navbar">
<ul className="navbar-list">
                <li><Link to={"/"}> Inicio</Link></li>
                <li><Link to={"/productos"}> Productos</Link></li>
                <li><Link to={"productos/categoria/tintas"}>Tintas</Link> </li>
                <li><Link to={"productos/categoria/limpiadores"}>Limpiadores</Link> </li>
                <li><Link to={"productos/categoria/schablones"}>Schablones</Link> </li>
                <li><Link to={"productos/categoria/otros"}>Otros</Link> </li>
                <li><Link to={"/cart"}>Cart</Link> </li>
                <li><Link to={"/servicios"}> Servicios</Link></li>
                <li><Link to={"/nosotros"}> Nosotros</Link></li>
                <li><Link to={"/contacto"}> Contacto</Link></li>
            </ul>
            </div>*/

            /* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               <NavDropdown.Divider />*/