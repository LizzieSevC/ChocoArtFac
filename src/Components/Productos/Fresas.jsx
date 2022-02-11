import React from "react";
import ProductItem from "../Shopping Cart/ProductItem";
import { Fresas } from "../Data/Fresas";


export function FresasF() {
    return(
        <>

        <h1> Fresas </h1>

<article className="productCard">
{Fresas.products.map((product) => (
<ProductItem key={product.id}data={product}/>
))}
</article> 

    </>
    
        );
}