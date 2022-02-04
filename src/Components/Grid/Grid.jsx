import React from 'react';
import './Grid.css';

export function Grid() {
    return (
<>

<h1 className='pageTitle'>Nuestros productos</h1>

    <div className='grid'>
    
<div className='productGrid1'> <img className='imageGrid' src={ require('./Images/Chocomensaje.jpg') } alt='chocomensaje' /> </div>
<div className='descriptionGrid1'>
    <h2 className="titleGrid"> Chocomensaje </h2>
    <p className='textGrid'>
        Deliciosos chocomensajes con ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente.
    </p>
</div>
<div className='productGrid2'><img className='imageGrid' src={ require('./Images/Cofre.jpg') } alt='chococofre' /> </div>
<div className='descriptionGrid2'>
    <h2 className="titleGrid"> Cofres </h2>
    <p className='textGrid'>
        Deliciosos cofres con ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente ingrediente.
    </p>
</div>

    </div>
</>
    );
};

