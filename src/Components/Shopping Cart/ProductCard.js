import React from "react";


const ProductCard = ({ data, delOneFromCart, delAllFromCart, addToCart, quantity }) => {

    let { id, name, price } = data;
    let totalCategory = price * quantity;
    
    return ( //tarjetas del carrito
<>
    <div className="cardCart">
        <h4> {name} </h4>
        <h5> ${price} </h5>
        <h5> Cantidad: {quantity} </h5>
{/*         <h5> Total: {price * quantity} </h5> */}
        <h5> Total: ${totalCategory} </h5>
        <button className="buttonAgregar" onClick={() => delOneFromCart(id)}> - </button>
        <button className="buttonAgregar" onClick={() => addToCart(id)}> + </button>
        <button className="buttonAgregar" onClick={() => delAllFromCart(id, true)}>
        Eliminar este producto
        </button>

        <hr/>
    </div>
    </>
    );
};

export default ProductCard;
