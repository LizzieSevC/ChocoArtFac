import React from "react";
import ProductItem from "../Shopping Cart/ProductItem";
import { Trufas } from "../Data/Trufas";


export function TrufasF() {
    return(
        <>

        <h1> Trufas </h1>

<article className="productCard">
{Trufas.products.map((product) => (
<ProductItem key={product.id}data={product}/>
))}
</article> 

    </>
    
        );
}