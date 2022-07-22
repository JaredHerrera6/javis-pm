import React from 'react'
import "./styles/Concrete.css"
import Steps from "../Pictures/ConcretePics/Steps-1.jpg"
import {MdConstruction} from 'react-icons/md'
function Concrete() { 
  return (
    <div>
      <div className="concrete-service-description">
        <div className='concrete-services'>
          <MdConstruction className='construction-icon'/>
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
    </div>
  )
}

export default Concrete