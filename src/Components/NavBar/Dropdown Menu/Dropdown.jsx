import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import './Dropdown.css';



export function NavItem(props) {
    const [open, setOpen] = useState(false);
    
    return (
        <li>
            
        <a href="#" className="itemButton" onClick={() => setOpen(!open)}>
        Productos {props.item}
        </a>
        
        {open && props.children} {/* if the open property is true then it shows the properties to children? */}
        </li>
        );
}


export function DropdownMenu() {

    function DropdownItem(props) {
        return (
        <a href="#" className="menuItem">
            {props.children}
        </a>
        );
    }

return(
<div className="dropdown">
<Link to='/Bombones' className='link'> <DropdownItem>  Bombones  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Trufas    </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem>Fresas   </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Colombinas  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Anchetas  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Desayunos </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Ramos  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Cupcakes  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Chocomensajes  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Especiales </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Por temporada  </DropdownItem> </Link>
</div>

)






}



