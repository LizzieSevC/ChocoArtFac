import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/About us/AboutUs';
import { Chocopreguntas } from './Components/FAQ/FAQ';
import { ContactUs } from './Components/Contact us/ContactUs';
import { BombonesF } from './Components/Productos/Bombones';
import { TrufasF } from './Components/Productos/Trufas';
import { FresasF } from './Components/Productos/Fresas';
import { CupcakesF } from './Components/Productos/Cupcakes';
import { TuCarrito } from './Components/Shopping Cart/ShoppingCart';
import { Store } from './Components/Shopping Cart/Redux/Store';



export default function app() {
    
    return (
    <Provider store={ Store }>
<HashRouter>
    <Routes> 
    <Route path='/' element={<NavBar/>}>
        {/* Rutas de NavBar */}
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Chocopreguntas' element={<Chocopreguntas/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        {/* Rutas de los productos */}
        <Route path='/Bombones' element={<BombonesF /* reducer={ state } */ />} />
        <Route path='/Trufas' element={<TrufasF />} />
        <Route path='/Fresas' element={<FresasF />} />
        <Route path='/Cupcakes' element={<CupcakesF />} />
        {/* Ruta del carrito */}
        <Route path='/TuCarrito' element={<TuCarrito/>} />
        {/* Ruta que permite ir a inicio en caso de direccion incorrecta */}
        <Route path='*' element={<Navigate to='/'/>} /> 
    </Route>
    </Routes> 
</HashRouter> 
</Provider>
    )
    }


