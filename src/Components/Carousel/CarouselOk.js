import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styleCarousel.css"

const CarouselOk=()=>{

    return(
        <div className="carousel-container">
        <Carousel fade id="carouselItem">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="serigrafia.gif"
      alt="First slide"
    />
    <Carousel.Caption>
    <p className="carousel-p">Especialistas en insumos serigraficos</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="local.gif"
      alt="First slide"
    />

    <Carousel.Caption>
    <p className="carousel-p">Tintas-Telas-Schablones</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="702.gif"
      alt="Third slide"
    />

    <Carousel.Caption>
    <p className="carousel-p">1952-2022 Con ustedes</p>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default CarouselOk