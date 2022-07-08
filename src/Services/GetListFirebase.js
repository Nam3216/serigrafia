import React from "react"
import {collection,getDocs,etDocs} from "firebase/firestore"
import db from "../Firebase"
//import GetList from "./GetList"

const GetListFirebase= async ()=>{
    const itemCollection=collection(db,"ListPlanograf")
    const productsSnapshot=await getDocs(itemCollection)
    console.log("prod", productsSnapshot)
    const productList=productsSnapshot.docs.map((doc)=>{
        /*console.log("doc",doc.data())
        console.log("doc id",doc.id)*/
        let product=doc.data()
        product.id=doc.id
        return product
      
    })
    return productList
    console.log("productlist",productList)

 

}

export default GetListFirebase