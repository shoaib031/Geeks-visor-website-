import React from 'react'
import logo from "../assets/logo.png"
import link from "../assets/linkedn.png"
import map from "../assets/map.png"

const Footer = () => {
return (
<div class="footer-parent">
    <div class="footer">
        <div class="footer1">
            <img src={logo} alt="" />
            <p>Our aim is to provide top-quality services that help businesses of all sizes achieve their goals. We
                strive to deliver innovative, cost-effective solutions that meet our clients' unique needs, and to build
                long-term relationships based on collaboration, communication, and trust.</p>
        </div>
        <div class="footer2">
            <h3>Company</h3>
            <a href="">Home</a>
        </div>
        <div class="footer3">
            <h3>Support</h3>
            <a href="">Contact US</a>
        </div>
        <div class="footer4">
            <h3>Address</h3>
            <p><i class="fa-solid fa-location-dot" id="dot"></i>Flat# 6 Building 19-C South Park Avenue, Ext, D.H.A.
                Phase 2 Defence <br /> Housing Authority, Karachi, Pakistan. <br /></p>
            <p><i class="fa-regular fa-envelope" id="dot"></i>Email: support@geeksvisor</p>
            <p><i class="fa-solid fa-phone" id="dot"></i>Phone: +(92) 340 8636954</p>
            <i class="fa-brands fa-linkedin fa-2x" id="linkedn"></i>
        </div>
    </div>
</div>
)
}

export default Footer