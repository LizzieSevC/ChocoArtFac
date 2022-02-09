import { useReducer } from 'react';
import CartItem from './CartItem';
import ProductItem from './ProductItem';
import { shoppingReducer, cartDefault } from "./Reducers";
import { typeOfAction } from './ShoppingCartActions';
import './ShoppingCart.css';

export function TuCarrito() {

const [state, dispatch] = useReducer(shoppingReducer, cartDefault);
const{ products, cart } = state;


const addToCart = (id) => {
/*   console.log(id); */
  dispatch({ type: typeOfAction.ADD_TO_CART, payload: id })
};
const delFromCart = (id, all = false) => {
/*   console.log(id, all); */
  if(all) {
    dispatch({ type: typeOfAction.REMOVE_ALL_FROM_CART, payload:id })
  } else{
    dispatch({ type: typeOfAction.REMOVE_ONE_FROM_CART, payload:id })
  }
};

const clearCart = () => {
  dispatch({ type: typeOfAction.CLEAR_CART })
};

return(
  <>
  <div>

<h1>Tu carrito</h1>

<article className='cartBox'>
{products.map((product) => (
<ProductItem key={product.id}data={product} addToCart={ addToCart }/>
))}
</article>

<article>

<button onClick={clearCart}> Limpiar carrito </button>
{cart.map((item, index) => (
<CartItem key={index} data ={item} delFromCart={delFromCart} /> 
))}

</article>

    </div>

    </>
  );
}

export default TuCarrito;