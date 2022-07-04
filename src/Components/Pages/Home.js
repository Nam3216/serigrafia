import React, { useState,useEffect } from "react"
import "./styleHome.css"
import CarouselOk from "../Carousel/CarouselOk"
import GetList from "../../Services/GetList"
import Items from "../Items/Items"
import GetListFirebase from "../../Services/GetListFirebase"
import SectionTitle from "../SectionTitle/SectionTitle"
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SchoolIcon from '@mui/icons-material/School';
import SevenKPlusIcon from '@mui/icons-material/SevenKPlus';
import StarIcon from '@mui/icons-material/Star';



const Home=()=>{
    const[list,setList]=useState([])
    const[idBanner,setIdBanner]=useState(true)

 
  

    useEffect(()=>{
        GetListFirebase().then((list)=>{
            setList(list)
        })
    },[])


    useEffect(()=>{
        window.addEventListener("scroll",scrollBanner)
        return()=>{
        window.removeEventListener("scroll",scrollBanner)
        }
    },[])

    const scrollBanner=()=>{
        if(window.scrollY>400){
            setIdBanner(false)
        }
        
    }
/*<div className="carrousel">
<CarouselOk/>      
</div>*/
    return(
        <div className="home-container">
               
        <div className="offer-container-title">
            <div className="presentacion">
                <div className="texto-izq">
                    <h3>Seri-Grafia Online</h3>
                    <p>Tarjetas  <CreditCardIcon className="icon"/></p>
                    <p>Ofertas  <LocalOfferIcon className="icon"/></p>
                    <p>Shopping  <ShoppingCartCheckoutIcon className="icon"/></p>
                    <p>Asesoramiento  <SchoolIcon className="icon"/></p>
                    <p>Experiencia  <SevenKPlusIcon className="icon"/></p>
                </div>
                <img src="serigrafia2.gif" alt="cargando" id="img-home"/>
                <div className="texto-der">
                    <h3>Todos los insumos </h3>
                    <p><StarIcon className="icon"/>  Tintas</p>
                    <p><StarIcon className="icon"/>  Limpiadores</p>
                    <p><StarIcon className="icon"/>  Schablones</p>
                    <p><StarIcon className="icon"/>  Armados</p>
                    <p><StarIcon className="icon"/>  Tejido</p>
                </div>
            </div>
            <div className="offer-container">
                <div className="home-productos"><p>Ofertas</p></div>
                {list.map((product)=>{
                    if(product.offer=="si"){
                        return <Items data={product} key={product.id}/>
                    }
                })}

                <div className="home-productos"><p>Mas Vendidos</p></div>
                {list.map((product)=>{
                    if(product.offer=="vendido"){
                        return <Items data={product} key={product.id}/>
                    }
                })}
            </div>
        </div>
        <img src="onlineshop.gif" alt="cargando" id={ idBanner ? "banner-shop":"banner-shop-animation"} />
         <div className={idBanner ? "banner2Ok" :"banner2" }>
            <img src="partners.png "alt="cargando"/>
            <img src="mejor-asesoramiento.png "alt="cargando"/>
            <img src="garantia.png "alt="cargando" id="banner-garantia"/>
        </div>
        </div>
    )
}

export default Home