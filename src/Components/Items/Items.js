import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ContextElement } from "../../Context/Context"
import Button from 'react-bootstrap/Button'
import "./styleItems.css"
import ItemCount from "../ItemCount/ItemCount"
import { ProductionQuantityLimits } from "@mui/icons-material"
import { getInitColorSchemeScript } from "@mui/material"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const Items=({data,msg})=>{
    const {id,img,title,description,offer,quantity,color,price}=data
    const Navigate=useNavigate()
    const {AddProduct,listCart,getColor,checkColor,setCheckColor} =useContext(ContextElement)
    
//{msg=="detail" ? "item-detail":"item"}c  deberia qeda ok asi, si es pag detail, q ponga ese class asi tiene css para esa pagina y no se desarregla en otras pag los items
//si no funciona poner class item, y al otro div class item-text
//{msg=="detail" ? "item-text-detail":"item-text"}

    useEffect(()=>{//para que muestre cdo se cargue pag el color del item que muestra en detail
        setCheckColor(color)
    },[])

    const addHandle=(count)=>{//funcion ayudadora, recibe de itemcount el count, q es la cantidad elegida, y pasa desde aca al addproduct producto y cant
       
        AddProduct(data,count,checkColor)
    }

   //href="#/action-2"
   //getColor("Rojo",title)
    return (
        <div key={id} className={msg=="detail" ? "item-detail":"item"} >
            <img src={img} alt="cargando"/>
            <div className={msg=="detail" ? "item-text-detail":"item-text"}>
                {msg!="detail" ?( <p>{title} </p>):(<h5>{title}</h5>)}
                {msg!="detail"&&(
                <Button variant="secondary" id="see-detail-button" onClick={()=>Navigate(`/productos/detalle/${id}`)}>Ver detalle </Button>)}
                {msg=="detail"&&(
                    <div className="item-text-detail-container">
                        <p>{description}</p>
                        <p>$ {price}</p>
                        {color !="nada" && <div className="pick-color">
                                                <p>Color: {checkColor} </p> 
                                                <div className="pick-color-selector">
                                                    <DropdownButton id="dropdown-basic-button" title="Elige tu color">
                                                        <Dropdown.Item  onClick={()=>setCheckColor("Rojo")}><div className="div-color-letters" >Rojo</div><div style={{background:"red"}} className="div-color" > </div></Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>setCheckColor("Azul")} ><div className="div-color-letters">Azul</div><div style={{background:"blue"}} className="div-color" > </div></Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>setCheckColor("Amarillo")} ><div className="div-color-letters">Amarillo</div><div style={{background:"yellow"}} className="div-color" > </div></Dropdown.Item>
                                                        <Dropdown.Item  onClick={()=>setCheckColor("Blanco")}><div className="div-color-letters">Blanco</div><div style={{background:"white"}} className="div-color" id="div-color-white" > </div></Dropdown.Item>
                                                        <Dropdown.Item  onClick={()=>setCheckColor("Negro")}><div className="div-color-letters">Negro</div><div style={{background:"black"}} className="div-color" > </div></Dropdown.Item>
                                                    </DropdownButton> 
                                                </div>
                                            </div>}
                        {msg=="detail" &&(
                        <ItemCount msg={"detail"} addHandleOk={addHandle} initial={0} /> )}

               
                    </div>
                )}
                
                
            </div>

        </div>
    )

}

export default Items

/*{msg=="detail"&&(
                
                    <Button variant="secondary" onClick={()=>AddProduct(data)}>Agregar a la lista</Button>)}*/