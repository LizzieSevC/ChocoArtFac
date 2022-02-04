import React from "react";
import { CarouselData } from "../Carousel/CarouselData";
import CarouselImages from "../Carousel/CarouselImages";
import { Grid } from "../Grid/Grid";
import './Home.css';

export function Home(){
    return(
<>
    <div className="containerCarrousel">
    
    <CarouselImages images={ CarouselData } />

    </div>
    
    <div className="containerGridProductos">
    
    <Grid />
    
    </div>
</>
    );
}

