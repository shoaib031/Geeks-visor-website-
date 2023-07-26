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

        <div class="wrapper">
          <div class="card">
            <img src={soplan} alt="" />
            <div class="info">
              <h3>Wealth Builder</h3>
              <p> Revolutionize Your Wealth Management with Proven Formulas.</p>
            </div>
          </div>

          <div class="card">
            <img src={shopify} alt="" />
            <div class="info">
              <h3>Deepbloo</h3>
              <p> A sales and market Intelligence Platform for the Energy sector.</p>
            </div>
          </div>

          <div class="card">
            <img src={geeks} alt="" />
            <div class="info">
              <h3>Read-ing</h3>
              <p>Reading Made Easy The Must-Have App for Book Lovers.</p>
            </div>
          </div>

          <div class="card">
            <img src={visor} alt="" />
            <div class="info">
              <h3>Soplan</h3>
              <p>With SoPlan, your customers can schedule an appointment with you in under a minute.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentWork