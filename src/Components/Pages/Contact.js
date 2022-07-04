import React,{useState,useEffect,useRef} from "react"
import "./styleContact.css"
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button'
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact=()=>{
    const[infoPerson,setInfoPerson]=useState({name:"",surname:"",email:"",phone:"",msg:""})
    const form=useRef()

    const handleInput=(e)=>{
        e.preventDefault()
        setInfoPerson({...infoPerson,[e.target.name]:e.target.value})
    }

    console.log(infoPerson, "infoperson")
/*-----codigo email js--------------------------*/
    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_owarvfi', 'template_b1s9ayj', form.current, 'Ab-jG_IYyCla718rH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
 
    return(
        <div className="contact-container-title">
            <SectionTitle dataTitle={"Contacto"}/>
            <div className="contact-container">
                <h5>Envienos un mensaje mediante este formulario y le responderemos a la brevedad</h5>
                <form ref={form} onSubmit={handleSubmit}>
                    <label for="name"><p>Nombre</p></label>
                    <input type="text" className="inputs" placeholder="Escriba su nombre" name="name" value={infoPerson.name} onChange={handleInput}/>
                    <label for="surname"><p>Apellido</p></label>
                    <input type="text" className="inputs" placeholder="Escriba su apellido" name="surname" value={infoPerson.surname} onChange={handleInput}/>
                    <label for="email"><p>Email</p></label>
                    <input type="text" className="inputs" placeholder="Escriba su direccion de email" name="email" value={infoPerson.email} onChange={handleInput}/>
                    <label for="phone"><p>Telefono</p></label>
                    <input type="text" className="inputs" placeholder="Escriba su Telefono" name="phone" value={infoPerson.phone} onChange={handleInput}/>
                    <label for="msg"><p>Escribanos su consulta o comentario</p></label>
                    <textarea id="input-msg" placeholder="Escriba su mensaje" name="msg" value={infoPerson.msg} onChange={handleInput}></textarea>
                    <Button variant="secondary" id="see-detail-button" type="submit">Enviar</Button>


                 </form>
            </div>
        </div>
    )
}

export default Contact