import React,{useState,useEffect} from "react"
import ProductsMock from "../Components/ProductsMock/ProductsMock"

const GetList=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return resolve(ProductsMock)
        },2000)
    })
}

export default GetList