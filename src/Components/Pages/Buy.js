import React,{useEffect,useState} from "react"
import { useContext } from "react"
import { ContextElement } from "../../Context/Context"
import "./styleBuy.css"
import { Button } from "react-bootstrap"
import db from "../../Firebase"
import {addDoc,collection}from "firebase/firestore"
import SectionTitle from "../SectionTitle/SectionTitle"

const Buy=()=>{

    const{listCart,totalPrice}=useContext(ContextElement)    
    const[dataBuyer,setDataBuyer]=useState({
        name:"",
        email:"",
        cuil:"",
        address:"",
        creditcard:"",
    })
    const[order,setOrder]=useState({
        infoTransaction:dataBuyer,
        item:listCart
    })

    const GetData=(e)=>{
        e.preventDefault()
        setDataBuyer({...dataBuyer,[e.target.name]:e.target.value})
    }

  

    const handleSubmit=(e)=>{
        e.preventDefault()
        let orderOk={order,infoTransaction:dataBuyer}//poner asi, sino no se actualiza correctamente para mandar a fb, queda como uno atrasado, osea se manda vacio y con el otro que hago, se manda el anterior, y asi
       setOrder({...order,infoTransaction:dataBuyer})
      // orderOk=order
      PushOrder(orderOk)//le paso por otro objwto, sino el state no llegaba a actualizarse.

    }
    console.log("order",order)

    const PushOrder=async(orderOk)=>{
        const orderFb=collection(db,"Order")
        const add=await addDoc(orderFb,orderOk)
        console.log("orden",add.id)
        
    }

 

  //value={dataBuy.cuil}  no me andaba con el value
    console.log(totalPrice, "price")
    return(

        <div className="form-buy-container">
            <SectionTitle dataTitle={"Comprar"}/>
            <div className="form-buy">

                <form onSubmit={handleSubmit} >
                    <label for="name"></label>
                    <input type="text" placeholder="Escriba su nombre" name="name"  onChange={GetData} />
                    <label for="cuil"></label>
                    <input type="text" placeholder="Escriba su Cuil" name="cuil" onChange={GetData}/>
                    <label for="email"></label>
                    <input type="text" placeholder="Escriba su Email" name="email"  onChange={GetData}/>
                    <label for="address"></label>
                    <input type="text" placeholder="Escriba su direccion" name="address"  onChange={GetData}/>
                    <label for="creditcard"></label>
                    <input type="text" placeholder="Escriba su Tarjeta de Credito" name="creditcard"  onChange={GetData}/>
                    <Button id="see-detail-button" type="submit">Comprar</Button>

                </form>
                <div id="price">El precio a pagar es ARS {totalPrice} </div>
           </div>
        </div>
    )
}

export default Buy