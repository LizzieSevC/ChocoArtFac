import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Dropdown.css';



export function NavItem(props) {
    const [open, setOpen] = useState(false);
    
    return (
        
<div>

        <ul className="itemButton" onClick={() => setOpen(!open)}>
        Productos {props.item}
        </ul>
        
        {open && props.children} {/* if the open property is true then it shows the properties to children? */}

</div>
        );
}


export function DropdownMenu() {

    function DropdownItem(props) {
        return (
<div className='menuItem'>

{props.children}
</div>


        );
    }

return(
<div className="dropdown">

<Link to='/Bombones' className='link'> <DropdownItem>  Bombones  </DropdownItem> </Link>
<Link to='/Trufas' className='link'> <DropdownItem> Trufas </DropdownItem> </Link>
<Link to='/Fresas' className='link'> <DropdownItem> Fresas </DropdownItem> </Link>

{/* <Link to='/' className='link'> <DropdownItem> Colombinas  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Anchetas  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Desayunos </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Ramos  </DropdownItem> </Link>
 */}

<Link to='/Cupcakes' className='link'> <DropdownItem> Cupcakes </DropdownItem> </Link> 

{/* <Link to='/' className='link'> <DropdownItem> Chocomensajes  </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Especiales </DropdownItem> </Link>
<Link to='/' className='link'> <DropdownItem> Por temporada  </DropdownItem> </Link>
 */}
</div>
)
}



