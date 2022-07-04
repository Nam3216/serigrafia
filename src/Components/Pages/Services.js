
import React,{useState,useEffect} from "react"
import GetListFirebase from "../../Services/GetListFirebase"
import Items from "../Items/Items"
import "./styleServices.css"
import SectionTitle from "../SectionTitle/SectionTitle"
import ProductsMock from "../ProductsMock/ProductsMock"

const Services=()=>{
    const[list,setList]=useState([])

    useEffect(()=>{
        GetListFirebase().then((list)=>{
            setList(list)
        })
    },[])


  /*  const GetList=()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                return resolve(ProductsMock)
            },2000)
        },)
    }

    useEffect(()=>{
        GetList().then((list)=>{
            setList(list)
        })
    },[])*/
    
    return (
        <div className="services-container">
            <SectionTitle dataTitle={"Servicios"}/>
            {list.map((item)=>{
                if(item.category=="servicios"){
                    return <Items data={item} key={item.id}/>
                }
            })}

        </div>
    )


}

export default Services