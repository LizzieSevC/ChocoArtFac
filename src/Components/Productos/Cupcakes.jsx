import React from "react";
import ProductItem from "../Shopping Cart/ProductItem";
import { Cupcakes } from "../Data/Cupcakes";


export function CupcakesF() {
    return(
        <>

        <h1> Cupcakes </h1>

<article className="productCard">
{Cupcakes.products.map((product) => (
<ProductItem key={product.id}data={product}/>
))}
</article> 

    </>
    
        );
}