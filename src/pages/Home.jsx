import React from 'react'
import emailjs from 'emailjs-com'
import HomePicData from '../PicData/HomePicData'
import HomeGalleryPD from "../PicData/HomeGalleryPD"
import {Link} from 'react-router-dom'
import ConcreteSlider from '../components/ConcreteSlider'

function Home() {
  return (
        <div className='home-container'>  
        <div className='services'>
          <h2>Services</h2>
        </div>
        <div className="card-wrapper">
            {HomePicData.map((item,index)=>{
               return  Card(item)
            })}
        </div>
        <h2 className="gallery">Gallery</h2>
        <ConcreteSlider slides = {HomeGalleryPD}/>
        <Mailer/>
        </div>
  )
}

//Card Function which displays the information for each Job type/Page
function Card(props){

  return(
     <div className="card">
      <div className="card_body">
          <img src= {props.image} alt = {props.alt} className = "card-image" />
          <p className="card-title">{props.title}</p>
          <p className="card_description">{props.description}</p>          
          <Link to = {props.route}>
              <button className="cardButton">{props.buttontext}</button>
          </Link>
      </div>
     </div> 
    
  )
}
//The Form that will allow customers to send email to the Owner
function Mailer () {
  function sendEmail(e){
      e.preventDefault();

  emailjs.sendForm('service_83byb76', 'template_gy4a3u9', e.target, 'J6p5xiR9Vv_vyrrBu')
      .then((result) => {
          alert("Your Message Has Been sent")
          console.log(result.text)
      }, (error)=>{
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
      <div>
          <h2 className =  "contact_us">
              Schedule An Appointment 
          </h2>
          <form className="email_form" onSubmit={sendEmail} >
              <label htmlFor= "first_name" >First Name</label>
              <input type= "text" id = "first_name" placeholder="E.g, John" name = "first-name" required></input>
              
              <label htmlFor="last_name">Last Name</label>
              <input type = "text" id = "last_name" placeholder="E.g., Cena" name = "last-name" required></input>
              
              <label htmlFor="_email">Email</label>
              <input type = "email" id = "_email" placeholder="E.g., customer@gmail.com" name = "email" required ></input>

              <label htmlFor="phone_number">Phone #</label>
              <input type = "tel" id = "phone_number" placeholder="E.g.,111-222-3333" name = "phone_number" required></input>

              <label htmlFor = "emessage">Message</label>
              <textarea type = "message" rows = "5" id = "emessage" placeholder="Enter Message ..." name = "emessage" required></textarea><br/>

              <input type = 'submit' value = 'Send' id = "send_email"/>
          </form>
      </div>
  )
}

export default Home