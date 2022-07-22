import React from 'react'
import "../../index.css"
function Footer() {
  return (
    <footer className='main-footer'>
            <div className = "footContainer">
                <div className = "row">
                    <div className='col'>
                        <h4 className="aboutjc">About JAVIS</h4>
                        <ul className='list-unstyled'>
                            <li>Some text</li>
                            <li>Describing </li>
                            <li>The Company</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4 className="services">Services</h4>
                        <ul className='list-unstyled'>
                            <li>Concrete Installation</li>
                            <li>Concrete Removal</li>
                            <li>Drainage System Installations</li>
                            <li>Masonry</li>
                            <li>Yard Cleaning</li>
                            <li>Garbage Removal</li>
                            <li>Snow Removal</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4 className="longername">Javis Property Maintenance LLC.</h4>
                        <ul className='list-unstyled'>
                            <li>Based In New Carrollton, MD</li>
                            <li>240-602-8980</li>
                            <li>Email Address</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()}&nbsp;
                        Javis Property Maintenance LLC. | All rights reserved
                        </p>
                </div>
            </div>
        </footer>
  )
}

export default Footer