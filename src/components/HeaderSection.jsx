import React from 'react'
import mainpic from "../assets/main-pic.png"

const HeaderSection = () => {
    return (
        <div class="headerparent">
            <div class="header">
                <div class="content1">
                    <h1>Power Your Vision with Next-Generation Custom Software</h1>
                    <p>We're here to take your vision to new heights! As your partner in digital transformation, we provide custom
                        software development that is tailor-made to your unique needs.</p>
                    <button>Let's Discuss Now</button>
                </div>

                <div class="content2">
                    <img src={mainpic} alt="jr" />
                </div>
            </div>
        </div>
    )
}

export default HeaderSection