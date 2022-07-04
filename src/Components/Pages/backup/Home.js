import React, { useState,useEffect } from "react"
import "./styleHome.css"
import CarouselOk from "../Carousel/CarouselOk"
import GetList from "../../Services/GetList"
import Items from "../Items/Items"
import GetListFirebase from "../../Services/GetListFirebase"
import SectionTitle from "../SectionTitle/SectionTitle"



const Home=()=>{
    const[list,setList]=useState([])

 
  

    useEffect(()=>{
        GetListFirebase().then((list)=>{
            setList(list)
        })
    },[])


    return(
        <div className="home-container">
          
           
        <div className="carrousel">
           <CarouselOk/>
        </div>
        <div className="offer-container-title">
            <SectionTitle dataTitle={"Destacados"}/>
            <div className="offer-container">
                {list.map((product)=>{
                    if(product.offer=="si"){
                        return <Items data={product} key={product.id}/>
                    }
                })}
            </div>
        </div>
        <img src="onlineshop.gif" alt="cargando" id="banner-shop"/>
        </div>
    )
}

export default Home