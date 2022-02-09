import React from 'react';


const ProductItem = ({ data, addToCart }) => {
let { id, name, price, image} = data;

    return(
        <>
        <div>
            <h4> { name } </h4>
            <h5> ${ price } </h5>
            <img className='productImage' src={ image } alt='chocolatito'/>
            <br/>
            <button onClick={() => addToCart(id)}> Agregar </button>
        </div>
    </>
    )

}

export default ProductItem;
