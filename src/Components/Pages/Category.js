import React,{useState,useEffect} from "react"
import ProductsMock from "../ProductsMock/ProductsMock"
import Items from "../Items/Items"
import { useParams } from "react-router-dom"
import GetList from "../../Services/GetList"
import GetListFirebase from "../../Services/GetListFirebase"
import SectionTitle from "../SectionTitle/SectionTitle"
import "./styleCategory.css"

const Category=()=>{
    
    const[list,setList]=useState([])
    const{category}=useParams()


   /* const GetList=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(ProductsMock)
            },2000)
        })
    }

    useEffect(()=>{
        GetList().then((list)=>{
            setList(list)
        })
    },[])*/
// uso el mock porque a veces no anda firebase
    useEffect(()=>{
        GetListFirebase().then((list)=>{
            setList(list)
        })
    },[])


    return (
        <div className="category">
            <SectionTitle dataTitle={category.toUpperCase()}/>
            <div className="category-container">   
            {list.map((product)=>{
                if(product.category==category){
                    if(product.category=="tintas"){
                        if(product.color=="Blanco"){
                            return (<div className="category-item"> 
                            <Items data={product} key={product.id}/></div>)
                        }

                    }
                    else{
                        return (<div className="category-item"> 
                        <Items data={product} key={product.id}/></div>)
                    }
                    
                   
                }
            })}
          
        </div>
        </div>
    )
}

export default Category


/*  <div className="category-container">
            <SectionTitle dataTitle={category.toUpperCase()}/>
            {list.map((product)=>{
                if(product.category==category){
                    
                    return (<div className="category-item"> 
                     <Items data={product} key={product.id}/></div>)
                }
            })}

        </div>*/