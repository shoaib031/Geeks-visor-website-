import React from 'react'
import soplan from '../assets/img1.png'
import shopify from '../assets/img2.png'
import geeks from '../assets/img3.png'
import visor from '../assets/img4.png'


const RecentWork = () => {
return (
<div class="recent-work-parent">
  <div class="recent-work">
    <div class="works">
      <h2 class="recentworks">Our Recent Works</h2>
      <div class="barrrr"></div>
      <p class="look">Take a look at some of our recent projects that showcase our expertise and commitment to
        delivering exceptional results for our clients.</p>
    </div>

    <div class="recentwork-image">
      <img src={soplan} alt=""/>
      <img src={shopify} alt=""/>
      <img src= {geeks}alt=""/>
      <img src= {visor}alt=""/>
    </div>
  </div>
</div>
)
}

export default RecentWork