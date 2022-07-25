import React from 'react'
import "./styles/Concrete.css"
import { MdConstruction } from 'react-icons/md'
import Step1 from "../Pictures/ConcretePics/Steps-1.jpg"
import Step2 from "../Pictures/ConcretePics/Steps-2.jpg"
import Stamped1 from "../Pictures/ConcretePics/Stamped-1.jpg"
import Stamped2 from "../Pictures/ConcretePics/Stamped-11.jpg"
import Broom1 from "../Pictures/ConcretePics/Concrete-1.jpg"
import Broom2 from "../Pictures/ConcretePics/Concrete-2.jpg"
import "react-alice-carousel/lib/alice-carousel.css";
import {StampedPicData} from '../PicData/StampedPicData'
import ConcreteSlider from '../components/ConcreteSlider'

function Concrete() {
  return (
    <div className='concrete-wrapper'>
      <div className="concrete-service-description">
        <div className='concrete-services'>
          <MdConstruction className='construction-icon' />
          <p>Concrete Services</p>
        </div>
        <div className='concrete-promise'>
          <p>Jc Property Maintenance Provides it's Customers
            with state of the Art Concrete designs
            and Insatllations in each of their Projects,
            Big or Small, Leaving Customers with full Satisaction along
            with Peace of mind with the return of their Investment.
          </p>
          <p>
            JC Property Maintenance offers a
            wide variation of Concrete Creations and
            styles to fulfill the Desires of their Customers.
          </p>
          <p>
            Concrete Services Offered:
            Stamped Concrete, Steps, Exposed Aggregate,
            Broomed, Smooth Finish, Commercial Ramps, etc
          </p>
        </div>
      </div>
      
      <p className='service-header'>Concrete Steps</p>
      <div className='concrete-container'>
        <div className='left-pic'>
          <img src={Step1}/>
        </div>
        <div className='center-description'>
          <p>
            At Javis Property Maintenance we offer several different Concrete step designs
            while following state codes to help ensure the saftey of our clients
          </p>
          <p>
            Our designs range from traditional broomed finished steps, to stamped
            and colored steps of different shapes and sizes. 
          </p>
          <p>
            No matter the length or quantity, we promise to deliver top quality 
            Steps to out customers.
          </p>
        </div>
        <div className='right-pic'>
          <img src={Step2} />
        </div>
      </div>
      <p className='service-header'>Broomed Concrete</p>
      <div className="concrete-container">
        <div className='left-pic'>
          <img src={Broom1} alt="Broomed Concrete Pic" />
        </div>
        <div className='center-description'>
          <p>
            Javis Property Maintenance offers the broomed concrete finish to the Customers
            that prefer both the look and functionality of the broomed texture.
          </p>
          <p>
            Customer have the option to get their Projects jointed or saw Cut along with an
            option to add the color of their choice
          </p>
          </div>
        <div className='right-pic'>
          <img src={Broom2} alt="Broomed Concrete Pic" />
        </div>
      </div>
      <p className='service-header'>Stamped Concrete</p>
      <div className='concrete-container'>
        <div className='left-Pic'>
          <img src={Stamped1} alt="Stamped Concrete Pic" />
        </div>
        <div className='center-description'>
        <p>
          Our Stamped Concrete Service Consists of several design and stone options.
          Aswell as color options to fulfill the needs of the customers
        </p>
        <p>
          Our promise to our customer is consistant delivery to 
          meet and exceed the expectations of our Customers
        </p>
        </div>
        <div className='right-pic'>
          <img src={Stamped2} alt="Stamped Concrete Pic" />
        </div>
      </div>
      <p className='service-header'>Check out Our Work</p>
      <ConcreteSlider slides = {StampedPicData}/>
    </div>
  )
}

export default Concrete