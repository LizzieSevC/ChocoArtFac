import React from 'react';
import { useDispatch } from 'react-redux';
import {addFromMenu} from './Redux/ShoppingCartActions'


const ProductItem = ({ data }) => {
let { id, name, price, image} = data;
const dispatch = useDispatch();


    return( //tarjetas de los productos(plantilla)
        <>
        <div className='cardContainer'>
            <h4 className='cardContainerText'> { name } </h4>
            <h5 className='cardContainerText'> ${ price } </h5>
            <img className='productImage' src={ image } alt='chocolatito'/>
            <br/>
            <button className='buttonAgregar' onClick={() => dispatch ( addFromMenu( id ) )}> Agregar al carrito </button>
        </div>
    </>
    )
}

export default ProductItem;
