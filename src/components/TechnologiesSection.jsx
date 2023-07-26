import React from 'react'
import web from "../assets/service-right-main-pic.png"
const TechnologiesSection = () => {
  return (
    <div class="technologyparent">
      <div class="technology">
        <div class="section1">
          <h2>Latest Technologies We Use</h2>
          <div class="bara"></div>
          <p>At our core, we're a technology-driven company, constantly exploring and implementing the latest innovations.
          </p>
          <div class="threecol">
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>AWS</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>Serverless</div>
            </div>
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Next.js</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>React.js</div>
            </div>
            <div class="tworow">
              <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>React.Native</div>
              <div class="serverless"><i class="fa-regular fa-circle-check" id="check"></i>Flutter</div>
            </div>
          </div>
          <div class="tworow">
            <div class="awsw"><i class="fa-regular fa-circle-check" id="check"></i>Node.js</div>
            <div class="serverless"><i class="fa-solid fa-ellipsis" id="check"></i>And More</div>
          </div>
        </div>
        <div class="section2">
          <img src={web} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TechnologiesSection