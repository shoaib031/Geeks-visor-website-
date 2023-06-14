import React from 'react'

const ContactUs = () => {
return (
   <div class="contactus-parent">
    <div class="contactus">
      <div class="lookingparent">
         <h1 class="help">Looking for a software solution? We're here to help. Contact us today!</h1>
         <p class="journey">Our experienced software developers are dedicated to delivering innovative solutions that help our clients succeed. Contact us today to discuss your project and start your journey now!.</p>
         <button class="dabao">CONTACT</button>
      </div>
      <div class="formparent">
         <input type="text" class="name" placeholder="Your Name"/>
         <input type="email" class="name" placeholder="Your email address"/>
         <input type="number" class="name" placeholder="Your phone number"/>
         <input type="text" class="name" placeholder="Your Subject"/>
         <input type="text" class="name" placeholder="Write your message..."/>
         <button class="formsubmit">SEND MESSAGE</button>
      </div>
    </div>
   </div>
)
}

export default ContactUs