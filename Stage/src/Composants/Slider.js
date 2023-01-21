import React from 'react'
import '../css/Slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import port from '../image/port.jpg'

function Slider() {
  return (
    <div class="Slider">
      <Carousel>
          <div>
              <img src={port} alt=""/>
              <p className="legend">Legend 1</p>
          </div>
          <div>
              <img src={port} alt=""/>
              <p className="legend">Legend 2</p>
          </div>
          <div>
              <img src={port} alt=""/>
              <p className="legend">Legend 3</p>
          </div>
      </Carousel>
    </div>
  )
}

export default Slider