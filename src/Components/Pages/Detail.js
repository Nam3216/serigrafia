import React,{useState,useEffect} from "react"
//import ProductsMock from "../ProductsMock/ProductsMock"
import Items from "../Items/Items"
import { useParams } from "react-router-dom"
//import GetList from "../../Services/GetList"
import GetListFirebase from "../../Services/GetListFirebase"
import SectionTitle from "../SectionTitle/SectionTitle"
import "./styleDetail.css"


const Detail=()=>{
    const[listProducts,setListProducts]=useState([])
    const{id}=useParams()
   
    



    useEffect(()=>{
   
        GetListFirebase().then((listProducts)=>{
        
            setListProducts(listProducts)
        })
    },[])

    return (
        <div>
           
            {listProducts.map((product)=>{
                if(product.id==id){
                   
                    return (<div className="detail-container">
                        
                     <Items data={product} key={product.id} msg={"detail"} />
                     </div>)
                }
            })}
        </div>
    )
}

export default Detail