import React from 'react'

const Footer = () => {
return (
<div class="footer-parent">
    <div class="footer">
        <div class="geeks">
            <img src="https://geeksvisor.com/images/logo.png" alt="" />
            <p class="aim">Our aim is to provide top-quality services that help businesses of all sizes achieve their
                goals. We strive to deliver innovative, cost-effective solutions that meet our clients' unique needs,
                and to build long-term relationships based on collaboration, communication, and trust.</p>
        </div>
        <div class="company">
              <h3 class="comp">Company</h3>
              <a href="#" class="home">Home</a>
        </div>
        <div class="support">
              <h3 class="comp">Support</h3>
              <a href="#" class="home">Contact Us</a>
        </div>
        <div class="address">
            <h3 class="comp">Address</h3>
            <ul>
                <li><a href="#" >Flat# 6 Building 19-C South Park Avenue, Ext, D.H.A. Phase 2 Defence <br/>Housing Authority, Karachi, Pakistan.</a></li>
                <li><a href="#">Email:support@geeksvisor</a></li>
                <li><a href="#">phone:+(92) 340 8636954</a></li>
            </ul>
        </div>
    </div>
</div>
)
}

export default Footer