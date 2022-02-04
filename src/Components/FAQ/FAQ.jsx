import React from 'react';
import './FAQ.css'

export function FAQ(){
    return(
<>

<h1>Chocopreguntas</h1>

<p className='questionText1'>Si no encuentras tu chocopregunta en esta lista, no dudes en contactarnos a nuestro whatsApp +57 316 3193456 </p>

<h2 className='questions'>¿Con cuanto tiempo de antelación debo programar mi pedido?</h2>
<p className='questionText'>Lo ideal es que nos cuentes que referencia seleccionaste con mínimo dos o tres días de antelación.</p>

<h2 className='questions'>¿Puedo enviar algo con el regalo que adquiera con ustedes?</h2>
<p className='questionText'>¡Claro que si! Cuando hagas tu pedido nos puedes informar sobre el detalle que quieres incluir. Es importante que tengas en cuenta que no puede ser de alto valor, que sea muy frágil o que sea muy grande.</p>

<h2 className='questions'>¿A donde realizan envios?</h2>
<p className='questionText'>Únicamente dentro de Bogotá</p>

<h2 className='questions'>¿El envío tiene costo?</h2>
<p className='questionText'>Si, se cobrarán $6.000 adicionales para cubrir el costo del envio.</p>
</>

    );
}