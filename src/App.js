import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/About us/AboutUs';
import { Chocopreguntas } from './Components/FAQ/FAQ';
import { ContactUs } from './Components/Contact us/ContactUs';
import { Bombones } from './Components/Productos/Bombones';
import { TuCarrito } from './Components/Shopping Cart/ShoppingCart';


export default function app() {
    return (
<BrowserRouter>
    <Routes> 
    <Route path='/' element={<NavBar/>}>
        {/* Rutas de NavBar */}
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Chocopreguntas' element={<Chocopreguntas/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        {/* Rutas de los productos */}
        <Route path='/Bombones' element={<Bombones/>} />
        {/* Ruta del carrito */}
        <Route path='/TuCarrito' element={<TuCarrito/>} />
        {/* Ruta que permite ir a inicio en caso de direccion incorrecta */}
        <Route path='*' element={<Navigate to='/'/>} /> 
    </Route>
    </Routes> 
</BrowserRouter>
    )
    }


