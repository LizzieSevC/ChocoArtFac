import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home';
import { AboutUs } from './Components/About us/AboutUs';
import { FAQ } from './Components/FAQ/FAQ';
import { ContactUs } from './Components/Contact us/ContactUs';



export default function app() {
    return (
<BrowserRouter>
    <Routes> 
    <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/ContactUs' element={<ContactUs/>} />
        <Route path='*' element={<Navigate to='/'/>} /> 
    </Route>
    </Routes> 
</BrowserRouter>
    )
    }


