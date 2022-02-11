import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './ShoppingCart.css';
import { addToCart, delFromCart } from './Redux/ShoppingCartActions';

export function TuCarrito() {
/*   const [state, dispatch] = useReducer(shoppingReducer, cartDefault);
 */  
  const state = useSelector( state =>state );
  const dispatch = useDispatch();
  const { products, cart } = state.shopping; // .shopping from indexReducer 

  
  return (
    <>
      <h1>Tu carrito</h1>
      <div>
        {cart.map((product) => (
          <div key={"div" + product.id}>
            <ProductCard
              key={product.id}
          addToCart={() => dispatch(addToCart(product.id))}
              delOneFromCart={() => dispatch(delFromCart(product.id))}
              delAllFromCart={() => dispatch(delFromCart(product.id, true))}
              quantity={product.quantity}
              data={products.find((item) => item.id === product.id)}/>
          </div>
        ))}
      </div>

{/*       <div>
    <h2> Total de tu pedido </h2>  
      </div> */}
    </>
  );
}


export default TuCarrito;