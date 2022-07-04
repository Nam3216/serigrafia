import React,{useState,useEffect} from "react"
import GetList from "../../Services/GetList"
//import "./styleListProducts - Copy.css"
import "./styleListProducts.css"
import {useNavigate} from "react-router-dom"
import GetListFirebase from "../../Services/GetListFirebase"
import Button from 'react-bootstrap/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const ListProducts=()=>{
    const[list,setList]=useState([])
    
    const Navigate=useNavigate()
    const[checkTitle,setCheckTitle]=useState(" ")//para que se abra titulo abajo items
    const[checkDescription,setCheckDescription]=useState(false)//para que si apreto en item se abra cuadro con descripcion
    const [description,setDescription]=useState(" ")//para poner la descripcion aca
    const[descriptionId,setDescriptionId]=useState(0)//para guardar el id del producto que muestro la descripcion. el id se usa en el navigate si va a detail
    const[descriptionImage,setDescriptionImage]=useState("")
    const[descriptionTitle,setDescriptionTitle]=useState("")

  
    useEffect(()=>{
        GetListFirebase().then((list)=>{
            setList(list)
        })
    },[])
    
  

    let previousid="0"


    const handleTitle=(tipo)=>{
        if(checkTitle==tipo){
            setCheckTitle(" ")
           
            setCheckDescription(false)//cdo se cierre titulo, q desaparezca ult detalle mostrado
        }
        else{
            setCheckTitle(tipo)
         }
    }

    const handleDescription=(description,id,image,title)=>{//funcion para q abra descripcion aparte
        if(checkDescription==false){//si esta en false q abra descripcion, q gaurde descripcion a mostrar y que guarde id para navigate deytail
            setCheckDescription(true)
            setDescription(description)
            setDescriptionId(id)
            setDescriptionImage(image)
            setDescriptionTitle(title)
        }
        if(checkDescription==true && descriptionId !=id){//si esta en true y no es el mismo elemento q clickeo, que haga todo
            setCheckDescription(true)
            setDescription(description)
            setDescriptionId(id)
            setDescriptionImage(image)
            setDescriptionTitle(title)
        }
        if(checkDescription==true && descriptionId ==id){//si clickeo en mismo elemento q esta abierto, q cierre
            //setCheckDescription(false)
           /* setDescription(description)
            setDescriptionId(id)*/
        }

       

        
    }
    return(
        <div className="products-container-container">
        <div className="products-container">
            <div className="tipos" >
                <h4 onClick={()=>handleTitle("tintas")} >Tintas <KeyboardArrowDownIcon/></h4>
               { checkTitle=="tintas" && list.map((product)=>{

                  //aca itera, pone segun categoria. paso el id de cada prod particular como parametro a handleitem. si check es igual al product.id de ese producto particular, se va a mostrar descripcion de ese prod
                   if(product.category=="tintas" && product.color=="Blanco"){
                        return ( <div className="products">
                        <p onClick={()=>handleDescription(product.description,product.id,product.img,product.title)} >{product.title}<ArrowForwardIosIcon fontSize="very small"/> </p>
                          </div> )}
                //tambien pone un boton, con link al detalle del producto
               })}

                <h4 onClick={()=>handleTitle("limpiadores")}>Limpiadores <KeyboardArrowDownIcon/></h4>
               { checkTitle=="limpiadores" && list.map((product)=>{

                  
                   if(product.category=="limpiadores"){
                        return (<div className="products">
                            <p onClick={()=>handleDescription(product.description,product.id,product.img,product.title)} >{product.title}<ArrowForwardIosIcon fontSize="very small"/> </p>
                              </div> )}
               })}

                <h4 onClick={()=>handleTitle("schablones")}>Schablones <KeyboardArrowDownIcon/></h4>
               { checkTitle=="schablones" && list.map((product)=>{

                  
                   if(product.category=="schablones"){
                        return (<div className="products">
                            <p onClick={()=>handleDescription(product.description,product.id,product.img,product.title)} >{product.title}<ArrowForwardIosIcon fontSize="very small"/> </p>
                              </div> )}
               })}

                <h4 onClick={()=>handleTitle("otros")}>Otros <KeyboardArrowDownIcon/></h4>
               { checkTitle=="otros" && list.map((product)=>{

                  
                   if(product.category=="otros"){
                        return (<div className="products">
                            <p onClick={()=>handleDescription(product.description,product.id,product.img,product.title)} >{product.title}<ArrowForwardIosIcon fontSize="very small"/> </p>
                               </div> )}
               })}
                 <h4 onClick={()=>handleTitle("servicios")}>Servicios <KeyboardArrowDownIcon/></h4>
               { checkTitle=="servicios" && list.map((product)=>{

                  
                   if(product.category=="servicios"){
                        return (<div className="products">
                            <p onClick={()=>handleDescription(product.description,product.id,product.img,product.title)} >{product.title}<ArrowForwardIosIcon fontSize="very small"/> </p>
                              </div> )}
               })}






        </div>
        <div className="type-detail">
            {checkDescription==true ? (
                            <div className="product-item-container">
                                <div className="product-item">
                                    <h5>{descriptionTitle} </h5>  
                                    <img src={descriptionImage} alt="cargando"/>
                                    <p>{description} </p>
                                </div>
                              <Button variant="secondary" id="see-detail-button" onClick={()=>Navigate(`/productos/detalle/${descriptionId}`)} >Ver Detalle</Button>
                             </div>):(
                                    <img src="fotolocal.jpg" alt="cargando"  id="foto-local"/>
                                )} 
                                
        </div> 
       
        </div>
                                    <img src="banner_all_products.gif"  id="banner" />
        </div>

    )
}

export default ListProducts

