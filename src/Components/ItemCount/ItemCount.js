import React,{useState,useEffect} from "react"
import Button from 'react-bootstrap/Button'
import "./styleItemCount.css"
import {useContext} from "react"
import {ContextElement} from "../../Context/Context"

const ItemCount=({msg,addHandleOk,initial})=>{
    //lo uso en detail y en cart para cambiar cantidad
    const[count,setCount]=useState(initial)
    const {AddProduct}=useContext(ContextElement)

    const AddCount=()=>{
        setCount(count+1)
    }

    const SubtractCount=()=>{
        if(count>0){
            setCount(count-1)
        }
    }

// {msg=="detail" ? <h5>{count} </h5> : <p id="p-count">{count} </p>}  


    return (
        <div className="item-count">
          {msg!="detail" &&  <p id="p-count">{count} </p>}  
          <div className="operation">
                <button variant="secondary"  onClick={SubtractCount} className={msg=="detail" ? "button-operation" : "button-operation-q"} >-</button>
                {msg=="detail" &&<h5 >{count}</h5>}
               
                <button variant="secondary"  onClick={AddCount} className={msg=="detail" ? "button-operation" : "button-operation-q"}>+</button>
           
            </div>
            {msg=="detail"&& (
                <Button variant="secondary" id="button-add"onClick={()=>addHandleOk(count)}>Agregar Producto</Button>)
            }
            {msg!="detail"&&(
                <Button variant="secondary" id="button-change-q" onClick={()=>addHandleOk(count,msg)}>Cantidad</Button>
            )}
           
        </div>
    )
}

// el msg != detail es para cambiar cantidad desde cart. en msg le paso el id del prod a cambiar cant

export default ItemCount

