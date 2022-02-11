import React from 'react';
import './Grid.css';

export function Grid() {
    return (
<>

<h1 className='pageTitle'>Nuestros productos</h1>

    <div className='grid'>
    
<div id='productImgContainer' className='productGrid1'>
    <img className='imageGrid' src={ require('./Images/Chocomensaje.jpg') } alt='chocomensaje' /> 
</div>
<div className='descriptionGrid1'>
    <h2 className="titleGrid"> Bombones </h2>
    <p className='textGrid'>
Ipsam corrupti culpa facilis, atque quod fugit fugiat mollitia cupiditate vero impedit animi commodi ipsum omnis, consequatur quas. 
    </p>
</div>
<div id='productImgContainer' className='productGrid2'><img className='imageGrid' src={ require('./Images/Cofre.jpg') } alt='chococofre' /> </div>
<div className='descriptionGrid2'>
    <h2 className="titleGrid"> Fresas </h2>
    <p className='textGrid'>
    Ipsam corrupti culpa facilis, atque quod fugit fugiat mollitia cupiditate vero impedit animi commodi ipsum omnis, consequatur quas. 
    </p>
</div>
<div id='productImgContainer' className='productGrid3'> <img className='imageGrid' src={ require('./Images/Chocomensaje.jpg') } alt='chocomensaje' /> </div>
<div className='descriptionGrid3'>
    <h2 className="titleGrid"> Fresas </h2>
    <p className='textGrid'>
Ipsam corrupti culpa facilis, atque quod fugit fugiat mollitia cupiditate vero impedit animi commodi ipsum omnis, consequatur quas. 
    </p>
</div>
<div id='productImgContainer' className='productGrid4'><img className='imageGrid' src={ require('./Images/Cofre.jpg') } alt='chococofre' /> </div>
<div className='descriptionGrid4'>
    <h2 className="titleGrid"> Cupcakes </h2>
    <p className='textGrid'>
    Ipsam corrupti culpa facilis, atque quod fugit fugiat mollitia cupiditate vero impedit animi commodi ipsum omnis, consequatur quas. 
    </p>
</div>

    </div>
</>
    );
};

