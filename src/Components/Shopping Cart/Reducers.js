import { typeOfAction } from './ShoppingCartActions'


export const cartDefault = {
products:[
{ id: 1, name: "Bombonesx4", price: 13000, image: 'https://images.unsplash.com/photo-1579440676594-3fef6d6ef538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'},
{ id: 2, name: "Bombonesx6", price: 25000, image: 'https://images.unsplash.com/photo-1545015451-f05567aa6bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
{ id: 3, name: "Bombonesx12", price: 45000, image: 'https://images.unsplash.com/photo-1573013792262-761a3e17fb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
{ id: 4, name: "Bombonesx24", price: 65000, image: 'https://images.unsplash.com/photo-1579440676737-accf905f464e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNob2NvbGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
],
cart:[],
};

export function shoppingReducer(state, action) {
switch (action.type){
    case typeOfAction.ADD_TO_CART:{
        let newItem = state.products.find(product => product.id === action.payload);
/*         console.log(newItem) */

let itemInCart = state.cart.find((item) => item.id === newItem.id);

return itemInCart ? { ...state, cart: state.cart.map ((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item ),} 
: { ...state, cart: [ ...state.cart, {...newItem, quantity: 1} ],  }

    }
    case typeOfAction.REMOVE_ONE_FROM_CART:{
    let itemToDelete = state.cart.find((item) => item.id === action.payload);

    return itemToDelete.quantity > 1 ? {
        ...state, 
        cart: state.cart.map( (item) => item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item ), } 
    :{ 
        ...state, cart: state.cart.filter((item) => item.id !== action.payload)
    };
    }
    case typeOfAction.REMOVE_ALL_FROM_CART:{
    return{
        ...state, cart: state.cart.filter((item) => item.id !== action.payload)
    }
    }
    case typeOfAction.CLEAR_CART:{
    return cartDefault;
    }
    default:
        return state;
}
}


