import React from "react";
import "./styleFooterContent.css"
import StarIcon from '@mui/icons-material/Star';

const Footer=()=>{

    return(
        <div className="footer-content">
            
            <p> <StarIcon/> Seri-Grafia. Marca Registrada. Av de los Ombues 543</p>
            <p> <StarIcon/> Tel: 555-55555. seri_grafia@gmail.com</p>
            <p>© Copyright - 2022 www.serigrafia.com.ar, TODOS LOS DERECHOS RESERVADOS. Las fotos contenidas en este site, el logotipo y las marcas son propiedad de www.dexter.com.ar y/o de sus respectivos titulares. Está prohibida la reproducción total o parcial, sin la expresa autorización de la administradora de la tienda virtual. </p>
            
        </div>
    )
}

export default Footer