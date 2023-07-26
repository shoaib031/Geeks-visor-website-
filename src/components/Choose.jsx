import React from 'react'
import man from "../assets/main-static.png"
import image from "../assets/download.png"
import rocket from "../assets/5799329.png"
import shield from "../assets/download (1).png"
import diamond from "../assets/2384862.png"
const Choose = () => {
    return (
        <div class="choose-parent">
            <div class="choose">
                <div class="side1">
                    <h2 class="why">Why Choose Us</h2>
                    <div class="barr"></div>
                    <p class="best">We use the latest technologies and industry best practices and come up with the right
                        solution for you.</p>
                    <img src={man} alt="" class="man" />
                </div>
                <div class="side2">

                    <div class="fourboxmain">
                        <div class="proven">
                            <img src={image} alt="" class="handshake" />
                            <h3 class="track">Proven Track Record</h3>
                            <p class="excelence">We have a proven track record of delivering successful projects for clients in
                                a wide range of industries. Our satisfied clients are a testament to our expertise, dedication,
                                and commitment to excellence.</p>
                        </div>
                        <div class="expert">
                            <img src={rocket} alt="" class="handshake" />
                            <h3 class="track">Expert Team</h3>
                            <p class="excelence">We have Skilled & experienced team of developers, designers & digital marketers passionate about delivering the best possible solutions.</p>
                        </div>

                    </div>
                    <div class="fourboxmain">
                        <div class="proven">
                            <img src={shield} alt="" class="handshake" />
                            <h3 class="track">Affordable Pricing</h3>
                            <p class="excelence">We offer competitive pricing for our services, without compromising on quality. Our goal is to deliver high-quality solutions that meet our clients' needs and fit within their budget.</p>
                        </div>
                        <div class="expert">
                            <img src={diamond} alt="" class="handshake" />
                            <h3 class="track">Top-Rated on Upwork</h3>
                            <p class="excelence">Top-rated on Upwork for delivering high-quality projects & exceptional customer service, earnings. We remain dedicated to maintaining our reputation as a top-rated agency on Upwork.

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose