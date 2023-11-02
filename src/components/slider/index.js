import React from 'react'
import { sliderSettings } from 'style'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Default({ data, setImageIndex }) {
    return (
        <Slider {...sliderSettings} className="slider">
            {data?.map((item, index) => (
                <div className="slider-item" key={index} onClick={() => { setImageIndex(index) }}>
                    <img src={item.image} alt="Image 1" />
                </div>))}
        </Slider>
    )
}
