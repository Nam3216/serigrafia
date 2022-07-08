import React,{useEffect,useState} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from "react";
import { ContextElement } from "../../Context/Context";
import "./styleCartWidget.css"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useNavigate } from "react-router-dom";



const CartWidget=()=>{
    const[showOk,setShowOk]=useState("https://thumbs.dreamstime.com/b/shop-cart-icon-buy-symbol-shopping-basket-sign-%C3%A2%E2%82%AC-stock-143519011.jpg")
    const Navigate=useNavigate()

    const{qCartWidget,listCart}=useContext(ContextElement)

    const showCart=()=>{
        if(showOk==false){
            setShowOk(true)
        }
        else{
            setShowOk(false)
        }
    }

    return(
        <Dropdown id="dropdown-cart-container">
        <Dropdown.Toggle split variant="dark" id="dropdown-cart"  >
       
             <ShoppingCartIcon/>
             <p id="p-cartwidget">{qCartWidget} </p>
             <Dropdown.Menu className="super-colors" id="drppdown-menu">
               
                { listCart.map((product)=>{
                    return(
                        <>
                        <Dropdown.Item  onClick={()=>Navigate("/cart")} className="dropdown-items" ><img src={product.img} style={{width:50}} alt="cargando"/> 
                        <p style={{color:"black"}} >{product.title} </p>
                        <div id="dropdown-item2">
                            <p style={{color:"black"}}>Cantidad: {product.quantity}</p>
                            <p style={{color:"black"}} id="dropdown-border">Precio: Ars {product.quantity*product.price} </p>
                        </div></Dropdown.Item>
                       
                       
                        
                        
                        </>)
                    })}
           
           </Dropdown.Menu>
           
        
        </Dropdown.Toggle>
        </Dropdown>
       
    )

}

export default CartWidget

/*<img src={product.img} alt="cargando"/>
                        <p>{product.title} </p>
                        <p>{product.color} </p>
                        <p>{product.quantity} </p>
                        <p>{product.quantity*product.price} </p>*/

                        /* cart normal
                        <div className="cart-widget" onClick={showCart} >
            <ShoppingCartIcon/>
            <p>{qCartWidget}</p>
            
        </div>*/

/*   <Dropdown.Item onClick={()=>Navigate("/cart")} className="dropdown-items" ><img src={product.img} style={{width:50}} alt="cargando"/> 
                        <p style={{color:"black"}} >{product.title} </p></Dropdown.Item>
                        <Dropdown.Item onClick={()=>Navigate("/cart")} className="dropdown-items" >
                        <p style={{color:"black"}}>Cantidad: {product.quantity}</p>
                        <p style={{color:"black"}} id="dropdown-border">Precio: Ars {product.quantity*product.price} </p> </Dropdown.Item>*/
        
        
                        /* {showOk && (
            listCart.map((product)=>{
                return (
                    <div>
                        <Dropdown.Item><img src={product.img} style={{width:80}} alt="cargando"/>  </Dropdown.Item>
                        <Dropdown.Item><p>{product.title}{product.color} </p> </Dropdown.Item>
                        <Dropdown.Item> <p>{product.quantity} </p></Dropdown.Item>
                        <Dropdown.Item> <p>Ars {product.quantity*product.price} </p></Dropdown.Item>
                        
                    </div>
                )
            })
        )}*/


        /*  <DropdownButton id="dropdown-basic-button" title="Elige tu color">
       
             <ShoppingCartIcon/>
             <p>{qCartWidget} </p>
             <Dropdown.Menu className="super-colors">
               
                { listCart.map((product)=>{
                    return(
                        <>
                        <Dropdown.Item><img src={product.img} style={{width:50}} alt="cargando"/>  </Dropdown.Item>
                        <Dropdown.Item><p style={{color:"black"}} >{product.title} </p> </Dropdown.Item>
                        <Dropdown.Item> <p style={{color:"black"}}>{product.quantity} </p></Dropdown.Item>
                        <Dropdown.Item> <p style={{color:"black"}}>Ars {product.quantity*product.price} </p></Dropdown.Item>
                        
                        </>)
                    })}
           
           </Dropdown.Menu>
           
        
        </DropdownButton>*/