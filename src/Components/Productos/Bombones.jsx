import React from "react";
import ProductItem from "../Shopping Cart/ProductItem";
import { Bombones } from "../Data/Bombones";
import './ProductCard.css';


export function BombonesF() {
    return(
        <>

        <h1> Bombones </h1>

<article className="productCard">
{Bombones.products.map((product) => (
<ProductItem key={product.id}data={product}/>
))}
</article> 

    </>
    
        );
}