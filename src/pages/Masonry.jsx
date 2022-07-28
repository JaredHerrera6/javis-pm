import React from 'react'
import { GiFreemasonry } from 'react-icons/gi'
import Wall1 from "../Pictures/MasonryPics/Masonry-2.jpg"
import Wall2 from "../Pictures/MasonryPics/Masonry-3.jpg"
import Custom1 from "../Pictures/ConcretePics/Custom-1.jpg"
import Custom2 from "../Pictures/ConcretePics/Custom-2.jpg"
import MasonryPicData from "../PicData/MasonryPicData.js"
import ConcreteSlider from '../components/ConcreteSlider' 
import "./styles/Masonry.css"
function Masonry() {
  return (
    <div className='drainage-wrapper'>
      <div className="drainage-service-description">
        <div className='drainage-services'>
          <GiFreemasonry className='construction-icon' />
          <p>Masonry</p>
        </div>
        <div className='concrete-promise'>
          <p className='drain-question'>
            Masonry Project In Mind?
          </p>
          <p>
            Javis Property Maintenance Offers several Masonry Service to 
            Help turn a vision into reality.
          </p>
          <p>
            From customs benches, walls, fire pits, and more, we offer expertise in 
            helping design your projects and more importantly, complete all 
            installation in a professional manner. 
          </p>
        </div>
      </div>
      <p className='service-header'>Walls</p>
      <div className='concrete-container'>
        <div className='left-pic'>
          <img src={Wall1}/>
        </div>
        <div className='center-description'>
          <p>
            At javis Property Maintenance we work to complete any 
            project regardless of the obsatcles presented
          </p>
          <p>
            Our implementations of cinder-block walls help our customers
            make the best out of their land and properties
          </p>
          <p>
            Our walls combine style with fucnctionality to help fulfill 
            our customers desired projects in a safe and managable manner
          </p>
        </div>
        <div className='right-pic'>
          <img src={Wall2} />
        </div>
      </div>
      <p className='service-header'>Customs</p>
      <div className="concrete-container">
        <div className='left-pic'>
          <img src={Custom1} alt="Broomed Concrete Pic" />
        </div>
        <div className='center-description'>
          </div>
        <div className='right-pic'>
          <img src={Custom2} alt="Broomed Concrete Pic" />
        </div>
      </div>
      <p className='service-header'>Check out Our Work</p>
      <ConcreteSlider slides = {MasonryPicData}/>
    </div>
  )
}

export default Masonry