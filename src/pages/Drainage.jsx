import React from 'react'
import { GiWarpPipe } from 'react-icons/gi'
import WaterProof4 from "../Pictures/DrainageSystemPics/WaterProof-4.jpg"
import WaterProof5 from "../Pictures/DrainageSystemPics/WaterProof-5.jpg"
import Drain1 from "../Pictures/DrainageSystemPics/Drain-1.jpg"
import Drain2 from "../Pictures/DrainageSystemPics/Drain-2.jpg"
import DownSpout1 from "../Pictures/DrainageSystemPics/DownSpout-1.jpg"
import DrainagePicData from "../PicData/DrainagePicData.js"
import ConcreteSlider from '../components/ConcreteSlider'  
import "./styles/Drainage.css"
function Drainage() {
  return (
    <div className='drainage-wrapper'>
      <div className="drainage-service-description">
        <div className='drainage-services'>
          <GiWarpPipe className='construction-icon' />
          <p>Drainage Systems</p>
        </div>
        <div className='concrete-promise'>
          <p className='drain-question'>
            Water Draining Issues?
          </p>
          <p>
            JC Property Maintenance offers a
            wide variation of Drainage Installations and solutions to resolve
            all storm water drainage issues that are present to out Clients
          </p>
          <p>
            JC Property Maintenance Specializes in all but not limited to the
            intallations of French Drains , Drain box's, DownSpout Extesions,
            and Waterproofing 
          </p>
        </div>
      </div>
      
      <p className='service-header'>WaterProofing</p>
      <div className='concrete-container'>
        <div className='left-pic'>
          <img src={WaterProof4}/>
        </div>
        <div className='center-description'>
          <p>
            Water Leaks through your basement can be a huge hassle that 
            no Home owner would want to encounter.
          </p>
          <p>
            Our Company vows to solve these issues regardless of the depth
            or the accessibility .
          </p>
          <p>
            We assure our customers that nothing less than the best materials
            and methods will be used to meet you needs and solve your issues. 
          </p>
        </div>
        <div className='right-pic'>
          <img src={WaterProof5} />
        </div>
      </div>
      <p className='service-header'>Drainage Systems</p>
      <div className="concrete-container">
        <div className='left-pic'>
          <img src={Drain2} alt="Broomed Concrete Pic" />
        </div>
        <div className='center-description'>
          <p>
            We Offer Full drain systems to gather and redirect
            water in all unwanted areas from our customers Property 
          </p>
          <p>
            With various years of experience, we make sure to implement the 
            upmost best techniques, materials, tools, and implementations to 
            solve our client's issues.
          </p>
          </div>
        <div className='right-pic'>
          <img src={Drain1} alt="Broomed Concrete Pic" />
        </div>
      </div>
      <p className='service-header'>DownSpout</p>
      <div className='concrete-container'>
        <div className='left-Pic'>
          <img src={Drain1} alt="Stamped Concrete Pic" />
        </div>
        <div className='center-description'>
        <p>
          DownSpouts are an underrated issue that can cause severe
          water damage to a home if not taken account for
        </p>
        <p>
         Our DownSpout solutions include connections to an existing 
         drain system, extension away from the damage area, and completely new Downspout Systems
         to eliminate issues with water damage. 
        </p>
        </div>
        <div className='right-pic'>
          <img src={DownSpout1} alt="Stamped Concrete Pic" />
        </div>
      </div>
      <p className='service-header'>Check out Our Work</p>
      <ConcreteSlider slides = {DrainagePicData}/>
    </div>
  )
}

export default Drainage