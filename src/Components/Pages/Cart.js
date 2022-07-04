import React,{useEffect} from "react"
import {useContext} from "react"
import { ContextElement } from "../../Context/Context"
import Button from 'react-bootstrap/Button'
import "./styleCart.css"
import {useNavigate} from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"


const Cart=()=>{
    

    const {AddProduct,listCart,DeleteProduct,EmptyList,changeProductQuantity,updateQuantity,setUpdateQuantity,checkQuantity,setCheckQuantity,totalPrice}=useContext(ContextElement)
   const Navigate=useNavigate()
    console.log(listCart, "listcart")

    useEffect(()=>{
        setCheckQuantity(false)
    },[])

    const changeQuantity=(count,id,color)=>{
        changeProductQuantity(id,count,color)
    }
    return(
        <div className="cart">
           
            {listCart.length>0 ? (
                <div className="table">

                    <div className="table-title">
                        <div id="title-producto">Producto</div>
                        <div id="title-title">Title</div>
                        <div id="title-color">Color</div>
                        <div id="title-precio-unitario">Precio Unitario</div>
                        <div id="title-cantidad">Cantidad</div>
                        <div id="title-cantidad-cambiar">Cambiar Cantidad</div>
                        <div id="title-precio">Precio Total</div>
                        <div id="title-eliminar">Eliminar</div>
                    </div>
                {listCart.map((product)=>{
                    return(
                        <div className="table-item">
                            <div id="item-img"><img src={product.img} alt="cargando"/> </div>
                            <div id="item-title"><p>{product.title}</p></div>
                           {product.color=="nada" ? <div id="item-color"><p>-</p></div> : <div id="item-color"><p>{product.color}</p></div> } 
                            <div id="item-precio-unitario"><p>$ {product.price}</p></div>
                            {checkQuantity ? 
                                (<div id="item-cantidad" style={{color:"black"}} ><p> {product.quantity}  unidades</p></div>):(//antes decia updatequantity pro con el color no funcionaba, asi funciona ok
                                    <div id="item-cantidad" style={{color:"black"}} ><p> {product.quantity}  unidades</p></div>
                                )}
                            <div id="item-cantidad-cambiar"><ItemCount addHandleOk={changeQuantity} msg={product.id} initial={product.quantity} /></div>
                            <div id="item-precio"><p>$ {product.price*product.quantity}</p></div>
                            <div id="item-delete"><Button variant="secondary"  onClick={()=>DeleteProduct(product)}>  Eliminar producto</Button></div>
                    
                        </div>
                    )
                })}
                    <h4>El precio total es: ARS {totalPrice}</h4>
                    <Button variant="secondary" onClick={()=>EmptyList()} id="button-empty">Vaciar Lista</Button>
                    <Button variant="secondary" onClick={()=>Navigate("/comprar")} id="button-empty">Comprar</Button>

                </div>

            ): ( <div>
                    <h4>No ha elegido ningun producto</h4>
                    <Button variant="secondary" onClick={()=>Navigate("/productos")} id="button-empty">Elegi Productos</Button>
                </div>)

            }
             
        </div>
    )

}

export default Cart

/*listCart.map((product)=>{
                return(
                    <div className="table">

                        <div className="table-title">
                            <div id="title-producto">Producto</div>
                            <div id="title-title">Title</div>
                            <div id="title-cantidad">Cantidad</div>
                            <div id="title-eliminar">Eliminar</div>
                        </div>
                        <div className="table-item">
                            <div id="item-img"><img src={product.img} alt="cargando"/> </div>
                            <div id="item-title">{product.title}</div>
                            <div id="item-cantidad">{product.quantity}</div>
                            <div id="item-delete"><Button variant="secondary"  onClick={()=>DeleteProduct(product)}>  Eliminar producto</Button></div>
                        
                        </div>
                    </div>
                )
            })}
            {listCart.length>0 ?(<Button variant="secondary" onClick={()=>EmptyList()} id="button-empty">Vaciar Lista</Button>):(
                <h4>No ha elegido ningun producto</h4>
            )}*/