import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'; 
import './NavBar.css';
import { DropdownMenu, NavItem } from './Dropdown Menu/Dropdown';
import { Menu, MenuItem, MenuItemLink, Burger } from "./NavBarElements";
import { FaBars, FaTimes, FaCartPlus } from 'react-icons/fa';




export function NavBar() {
    const [showBurgerMenu, setshowBurgerMenu] = useState(false);

return (
    <>
    <div className='headerLogo'>
    <img src='./Images/logo1.png' alt='logo' />
    </div>

<div className='navBarContainer'>
<Burger onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
    { showBurgerMenu ? <FaTimes /> : <FaBars /> }
</Burger>
    <Menu open={showBurgerMenu}>
            <MenuItem>
            <MenuItemLink onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
                <div className='linkContainer'>
                <Link to='/' className='link'> Inicio </Link>
                </div>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>

<MenuItemLink>
<NavItem>
    
<DropdownMenu/>

</NavItem> 
</MenuItemLink>  

            </MenuItem>
            <MenuItem>
            <MenuItemLink onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
                <div className='linkContainer'>
                <Link to='/AboutUs' className='link'> Nosotros </Link>
                </div>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
                <div className='linkContainer'>
                <Link to='/Chocopreguntas' className='link'> ChocoPreguntas </Link>
                </div>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
                <div className='linkContainer'>
                <Link to='/ContactUs' className='link'> Contáctanos </Link>
                </div>
            </MenuItemLink>
            </MenuItem>
            <MenuItem>
            <MenuItemLink onClick={ () => setshowBurgerMenu(!showBurgerMenu) }>
                <div className='linkContainer'>
                <Link to='/TuCarrito' className='link'> <FaCartPlus className="shopingCartIcon"/> </Link>
                </div>
            </MenuItemLink>
            </MenuItem>
        </Menu>
    </div>



{/* <header>
    <Burguer/>
    <ul className='menuList'>
        <li className='menuItem'><Link to='/' className='link'> Inicio </Link></li>
        <li className='menuItem'> Productos </li>
        <li className='menuItem'><Link to='/AboutUs' className='link'> Nosotros </Link></li>
        <li className='menuItem'><Link to='/FAQ' className='link'> ChocoPreguntas </Link></li>
        <li className='menuItem'><Link to='/ContactUs' className='link'> Contáctanos </Link></li>
    </ul>
</header> */}
    <div>
    <Outlet/> {/* structure! renders the routes and it's childrens */}
    </div>
    </>
);
}
