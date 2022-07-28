import React from 'react'
import emailjs from 'emailjs-com'
import "./styles/AboutUs.css"
const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const _FORM = process.env.REACT_APP_EMAIL_FORM;

function AboutUs() {
  return (
    <div className='about-us-wrapper'>
      <p className='aboutus-header'>About Javis Propery Maintenance</p>
      <div className ='aboutus-message'>
      <p>
        With over 8 Years of experience , Javis Property Maintenance 
        delivers High quality results to it's Customers that meet our
        company standards and those of our Clients. 
      </p>
      <p>
        Javis Property Maintenace pays attention to the slightest details
        to assure Customer Satisfaction and make sure to work alongside the 
        convenience of our Customers
      </p>
      <p>
        Our wide Range of services are offered to Customers in D.C.;
        Maryland, and Viriginia. Our services fit all the needs of our 
        customers from implementing solutions to resolve ongoing issues
        to a variety of decorative hardscaping to help transform 
        visions into realities
      </p>
      </div>
      <Mailer/>
    </div>
  )
}
//The Form that will allow customers to send email to the Owner
function Mailer () {
  function sendEmail(e){
      e.preventDefault();

  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, _FORM)
      .then((result) => {
          alert("Your Message Has Been sent")
          console.log(result.text)
      }, (error)=>{
        alert("Error.Email Could not be Sent")
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

export default AboutUs