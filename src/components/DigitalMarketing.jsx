import React from 'react'
import website from "../assets/service-left-main-pic.png"
const DigitalMarketing = () => {
  return (
    <div class="technologyparent">
      <div class="technology">
        <div class="section2">
          <img src={website} alt="" />
        </div>
        <div class="section1">
          <h2>Digital Marketing</h2>
          <div class="bara"></div>
          <p>Our digital marketing services help you connect with your target audience and achieve your business goals.
          </p>
          <div class="threecol">
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Google PPC</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>Facebook Ads</div>
            </div>
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Youtube Ads</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>Email Marketing</div>
            </div>
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Branding</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>Social Media Management</div>
            </div>
          </div>
          <div class="tworow">
            <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Mail</div>
            <div class="serverless"><i class="fa-solid fa-ellipsis" id="check"></i>And More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing