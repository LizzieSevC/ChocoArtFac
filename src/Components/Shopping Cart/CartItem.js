import React from 'react';

const CartItem = ({data, delFromCart, addToCart}) => {
let { id, name, price, quantity } = data;


    return (
    <div>

<h4> {name} </h4>
<h5> ${price} </h5>
<h5> Cantidad: {quantity} </h5>
<h5> Total: {price*quantity} </h5>
<button onClick={() => delFromCart(id)}> Eliminar uno </button>
<button onClick={() => addToCart(id)}> sumar uno </button>
<button onClick={() => delFromCart(id,true)}> Eliminar esta categoría </button>

    </div>
    );
};

export default CartItem;
