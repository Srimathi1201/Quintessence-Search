import "./About.css";
import React, { useState } from "react";
import Aboutus from "./images/About.jpg";
import border from "./images/m-1.png";
import Consumer from "./images/Consumer.jpg";
import Diversity from "./images/Diversity.jpg";
import Financial from "./images/Financial.jpg";
import Technology from "./images/Technology.jpg";
import Investment from "./images/Investment.jpg";
import Management from "./images/Management.jpg";

function About() {
    return (
        <div>
            <div className="about-heading">
                <img src={Aboutus} alt="About us" />
                <h3>About Us</h3>
            </div>
            <div className="about-title slideInDown">
                <h2>Corporate Profile</h2>
            </div>
            <div id="border-img">
                <img  src={border} alt="border"/>
            </div>
            <div className="content">
                <p>
                    <span>
                    We offer a comprehensive suite of HR services, from full-cycle recruitment to employee development and training. We take care of the administrative side of HR so that businesses can focus on their core operations. We also provide strategic guidance to ensure that companies are compliant with all employment laws and regulations.
                    </span>
                </p>
                <p>
                    <span>
                    Our team of experienced HR professionals is dedicated to providing quality services and solutions that are tailored to meet the unique needs of each client. We are committed to creating an environment where employees can thrive and feel valued. We strive to ensure that our clients have access to the best talent, the best resources, and the best practices in the industry.
                    </span>
                </p>
            </div>
            <div className="area-content">
                <div className="about-title slideInDown">
                    <h2>Area's Expertise</h2>
                </div>
                <div id="border-img">
                    <img src={border} />
                </div>
                <div className="areas-imgs">
                    <div>
                        <img src={Consumer} width="350" height="250"/>
                    </div>
                    <div>
                        <img src={Investment} width="350" height="250"/>
                    </div>
                    <div>
                        <img src={Diversity} width="350" height="250"/>
                    </div>
                    <div>
                        <img src={Financial} width="350" height="250"/>
                    </div>
                    <div>
                        <img src={Technology} width="350" height="250"/>
                    </div>
                    <div>
                        <img src={Management} width="350" height="250"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;