import React from 'react'
import './Slide.css'
import Slider from 'infinite-react-carousel/lib/carousel/slider';
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';

const Slide = () => {
  return (
    <div className='slide'>
      <div className="container">
        <Slider>
           {cards.map(card=>(
            <CatCard item={card} key={card.id}/>
           ))}
        </Slider>
        
      </div>
    </div>
  )
}

export default Slide
