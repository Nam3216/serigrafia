import React,{useState,useEffect} from "react"
import {createContext} from "react"
import GetListFirebase from "../Services/GetListFirebase"

const ContextElement=createContext()

const ContextContainer=({children})=>{
    const[listCart,setListCart]=useState([])
    const [updateQuantity,setUpdateQuantity]=useState(0)
    const[checkQuantity,setCheckQuantity]=useState(false)
    const[checkColor,setCheckColor]=useState("inicial")
    const[list,setList]=useState([])
    const[totalPrice,setTotalPrice]=useState(0)
    const[qCartWidget,setQCartWidget]=useState(0)
    const[checkQ,setCheckQ]=useState(0)//para q ande cartwidget
//states que se usan para el use effect que agrega un objeto tinta a la lista
    const[prodTintas,setProdTintas]=useState({})
    const [colorProdTinta,setColorProdTintas]=useState("")
    const[countProdTinta,setCountProdTinta]=useState(0)


    const AddProduct=(product,count,colorProduct)=>{ //esto es sin color
        
     
        let check=false
        
        if(product.category=="tintas"){//1esta parte es si son tintas, aca ve si ya esta ese color y actualiza cant
          
            listCart.map((item)=>{
                if(item.title==product.title){
                    if(item.color==colorProduct){//color se trae desde detail, segun el checkcolor de detail
                        item.quantity=count
                        check=true
                        setCheckQ(checkQ+1)//para que corra updateWidget(), sino esta parte del addproduct no la corria
                    }
                    
                }
            })
           
            if(check==false){//si no esta ese color, trae lista base de datos
              
                GetListFirebase().then((list)=>{
                    setList(list)//guarda lista de base de datos
                    setProdTintas(product)//guarda objeto producto que recibio como parametro, lo usa en el useEffect abajo para agregar el prod q no esta. si hago todo en misma funcion, no llega actualizar el estado lista y no agrega nada
                    setColorProdTintas(colorProduct)//guarda color que recibio como parametro
                    setCountProdTinta(count)//guarda cantidad
                    
                })
                //hace un map en lista, encuentra no por id, sino por title y color, y agrega a listacart
             
               
            }
            
        }
        else{//2 esto es si es otro producto sin color, busca si esta en lista cart y actualiza quant
            listCart.map((item)=>{
                if(item.id==product.id){
                    item.quantity=count
                    check=true
                    setCheckQ(checkQ+1)
                  
                }
            })
            
            if(check==false){//si no esta agrega el producto que trajo funcion desde detail
                product.quantity=count
                setListCart([...listCart,product])//agrega si no esta ya en lista
               // updateCartWidget()
            }
            
        }
      
        
    }

    useEffect(()=>{//cuando se modifica list (que es lista que obtiene de base de datos si es una tinta y se cambio de color)se ejecuta eso que agrega el producto tinta al carrito
        list.map((item)=>{
            if(item.title==prodTintas.title){
              //  alert("ok")
                if(item.color==colorProdTinta){
                    item.quantity=countProdTinta
                    setListCart([...listCart,item])
                   
                }
            }
        })
       
        
    },[list])


   //cuando se agrega algun  prod nuevo, se ejecuta el total price
    useEffect(()=>{
        GetTotalPrice()
       updateCartWidget()
    },[AddProduct])

    //para que corra updateCarWidget en la primera parte del add product, sino no corria
   useEffect(()=>{
    updateCartWidget()
   },[checkQ])
   

    const updateCartWidget=()=>{
        let q=0
     
        for(const item of listCart){
            
           q=q+item.quantity
        }
      
        setQCartWidget(q)
    }
   
//funcion para actualizar cantidad cdo se agrega desde carrito
    const changeProductQuantity=(id,count)=>{
      
  
     console.log(listCart,"listcart")
        listCart.map((product)=>{
            if(product.id==id ){
               
                product.quantity=count
                    

            }
        })
        setUpdateQuantity(count)//con el state se actualiza automaticamente en cart. fijarse si sigue requiriendose
        setCheckQuantity(true)//con esto le digo en cart si es true, q cant sea updateQuantity, si es false, q lo tome de listacart
        GetTotalPrice()//para que se actualice el precio total
        updateCartWidget()//para que actualice cartwidget cant
       //setCheckQuant(checkQuantity+1)
    }
//funcion total price
    const GetTotalPrice=()=>{
        
        let price=0
        let unitPrice=0
        listCart.map((product)=>{
            unitPrice=product.price*product.quantity
            price=price+unitPrice
        })

        setTotalPrice(price)
    }

    const getColor=(color)=>{
        setCheckColor(color)
     }

    //funcion para borrar un producto de la lista 
    const DeleteProduct=(product)=>{
   

      //asi esta ok, refresca mismo momento, se borra de html de cart
     let renew=listCart.filter(item=>item.id!=product.id)
      setListCart(renew)

    }
   
    const EmptyList=()=>{
        setListCart([])
    }
    
    const dataContext={AddProduct,listCart,DeleteProduct,EmptyList,changeProductQuantity,updateQuantity,setUpdateQuantity,checkQuantity,setCheckQuantity,getColor,checkColor,setCheckColor,setTotalPrice,totalPrice,GetTotalPrice,qCartWidget}



    return(
        <div>
            <ContextElement.Provider value={dataContext}>
                {children}
            </ContextElement.Provider>

        </div>
    )


}

export default ContextContainer
export {ContextElement}

