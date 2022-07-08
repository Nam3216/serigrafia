import React,{useEffect,useState} from "react"
//import ProductsMock from "../ProductsMock/ProductsMock"
import ListProducts from "../ListProducts/ListProducts"
import GetListFirebase from "../../Services/GetListFirebase"
import SectionTitle from "../SectionTitle/SectionTitle"
//import GetList from "../../Services/GetList"
import "./styleProducts.css"


/*import Items from "../Items/Items"*/
//import "./styleProducts.css"

const Products=()=>{
    //es solo container para ListProducts  <SectionTitle dataTitle={"Todos Los Productos"}/>
    return(
        <div className="all-products-container" >
            <SectionTitle dataTitle={"Todos los Productos"}/>
            <div className="item-container">
             <ListProducts/>
           </div>
        </div>

    )    
}

export default Products