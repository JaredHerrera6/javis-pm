import React from 'react'
import {Link} from 'react-router-dom'
import {AiTwotoneHome} from 'react-icons/ai'
import {GiConcreteBag,GiWarpPipe,GiFreemasonry} from 'react-icons/gi'
import {FcAbout} from 'react-icons/fc'
import "../../index.css"
function Footer() {
  return (
    <footer className='main-footer'>
            <div className = "footContainer">
                <div className = "info-row">
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='footer-header'>UseFul Links</li>
                            <li><Link to = "/" className='footer-link'><AiTwotoneHome className='footer-icon'/>Home</Link></li>
                            <li><Link to = "/concrete" className='footer-link'><GiConcreteBag className='footer-icon'/>Concrete</Link></li>
                            <li><Link to = "/Drainage" className='footer-link'><GiWarpPipe className='footer-icon'/>Drainage System</Link></li>
                            <li><Link to = "/Masonry" className='footer-link'><GiFreemasonry className='footer-icon'/>Masonry</Link></li>
                            <li><Link to = "/AboutUs" className='footer-link'><FcAbout className='footer-icon'/>About Us</Link></li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='footer-header'>Services</li>
                            <li>Concrete Installation</li>
                            <li>Concrete Removal</li>
                            <li>Drainage System Installations</li>
                            <li>Masonry</li>
                            <li>DownSpouting</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='list-unstyled'>
                            <li className='footer-header'>Contact Information</li>
                            <li>Based In Prince George's County</li>
                            <li>240-602-8980</li>
                            <li>thejavismp@gmail.com</li>
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