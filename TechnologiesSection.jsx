import React from 'react'

const TechnologiesSection = () => {
  return (
    <div class="parent">
      <div className="technology-div">
        <div class="section1">
          <div class="system">
            <h2 class="latest">Latest Technologies We Use</h2>
            <hr class="line" />
            <p class="at">At our core, we're a technology-driven company, constantly exploring and implementing the latest
              innovations.</p>
          </div>
          <div class="boxes">
            <div class="buttons">
              <button class="awss">AWS</button>
              <button class="serverless">Serverless</button>
            </div>
            <div class="buttons">
              <button class="awss">Next.js</button>
              <button class="serverless">React.js</button>
            </div>
            <div class="buttons">
              <button class="awss">React Native</button>
              <button class="serverless">Flutter</button>
            </div>
            <div class="buttons">
              <button class="awss">Node.js</button>
              <button class="serverless">And More</button>
            </div>
          </div>
        </div>
        <div class="section2">
          <img src="https://geeksvisor.com/images/services-right-image/service-right-main-pic.png" alt=""
            class="computer" />
        </div>

      </div>
    </div>

  )
}

export default TechnologiesSection