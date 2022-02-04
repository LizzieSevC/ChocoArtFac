import React from 'react';
import { useState } from 'react';
import { CarouselData } from './CarouselData';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './Carousel.css'

const CarouselImages = ({ images }) => {
const[current, setCurrent] = useState(0);
const length = images.length;

const nextImg =() => {
    setCurrent(current === length - 1 ? 0 : current + 1) 
};

const prevImg =() => {
    setCurrent(current === 0 ? length - 1 : current - 1) 
};

console.log(current);

if (!Array.isArray(images) || images.length <= 0) {
    return null;
}


    return (
    <section className='slide'>
        <FaArrowAltCircleLeft className="leftArrow" onClick={prevImg} />
        <FaArrowAltCircleRight className="rightArrow" onClick={nextImg} />
        {CarouselData.map((carousel, index) => {
            return (
                <div className={ index === current ? 'img active' : 'img' } key= { index }>
                { index === current && ( <img src={carousel.img} alt='chocolatitos' className='carouselImg' />)}
                </div>
            )
        })}
    </section>
    )
};

export default CarouselImages;
