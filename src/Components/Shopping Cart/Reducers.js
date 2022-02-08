import { typeOfAction } from './ShoppingCartActions'


export const cartDefault = {
products:[
{ id: 1, name: "Bombonesx4", price: 13000, image: 'https://images.unsplash.com/photo-1579440676594-3fef6d6ef538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hvY29sYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60'},
{ id: 2, name: "Bombonesx6", price: 25000 },
{ id: 3, name: "Bombonesx12", price: 45000 },
{ id: 4, name: "Bombonesx24", price: 65000 },
],
cart:[],
};

export function shoppingReducer(state, action) {
switch (action.type){
    case typeOfAction.:{}
    case RemoveOneArt.:{}
    case RemoveAllArt.:{}
    case ClearCart.:{}
    default:
        return state;
}
}


