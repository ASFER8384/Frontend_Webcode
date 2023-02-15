import React from 'react'
import "./ImageSlider.css"

export default function ImgaeSlider() {
    return (

        <div class="img-slider">
            <div class="slider-container">

                <div class="slide">
                    <img className='images-slider' src='/asset/1.jpeg' />
                </div>

                <div class="slide">
                    <img className='images-slider' src='/asset/2.jpeg' />
                </div>

                <div class="slide">
                <img className='images-slider' src='/asset/3.jpeg' />
                </div>
            </div>
        </div>

    )
}
