import React, { useState } from "react";
import "./Home.css";
import SimpleImageSlider from "react-simple-image-slider";
import HR3 from "./images/HR-3.jpg";
import HR1 from "./images/HR-1.jpg";
import leadership from "./images/leadership.jpg";
import about from "./images/about-us.jpg";
import border from "./images/m-1.png";
import Consumer from "./images/Consumer.jpg";
import Diversity from "./images/Diversity.jpg";
import Financial from "./images/Financial.jpg";
import Technology from "./images/Technology.jpg";
import Investment from "./images/Investment.jpg";
import Management from "./images/Management.jpg";
import Careers from "./images/Careers.jpg";
import Countup from 'react-countup';

function Home() {

    const sliderImages = [
        {
            url: HR3,
        },
        {
            url: HR1,
        },
        {
            url: leadership,
        },
    ];

    return (
        <div className="content-container">
            <div className="item">
                <SimpleImageSlider
                    width={"100%"}
                    height={"100%"}
                    autoPlay={true}
                    autoPlayDelay={3}
                    images={sliderImages}
                    showNavs={true}
                />
            </div>
            <div className="item" id="about">
                <div className="leftalgin">
                    <img src={about} width={500} height={410} alt="About us" />
                </div>
                <div className="about-content">
                    <div className="about-title slideInDown">
                        <h2>About Quintessence Search Labs</h2>
                    </div>
                    <div>
                        <img src={border} />
                    </div>
                    <div>
                        <p>
                            <span>
                                Quintessence Search labs is a next generation Technological Service Provider for all business and also offers both strategic and operational solution. Exuberant team of HR professionals navigate our client, to enhance their business through a customized digital process. We help our clients to achieve next level by making their business go-digital.
                            </span>
                        </p>
                        <p>
                            <span>
                                As a Human Resources team, we strive to create a workplace where our employees feel respected, valued, and appreciated. We also aim to promote a culture of open communication, collaboration, and engagement. We are committed to promoting a safe and healthy work environment, and to fostering an atmosphere of trust, integrity, and respect.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="statics-data item">
                <Countup end={100} duration={5}/>
            </div> */}
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
            <div className="Careers">
                <div className="about-title slideInDown">
                    <h2>Careers</h2>
                </div>
                <div id="border-img">
                    <img src={border} />
                </div>
                <div>
                    <img src={Careers} />
                </div>
                <div>
                    <p  id="mail-text">Interested to join us? Why wait, email your profile to <a href="mailto:hr@quintessencesearchlabs.in">hr@quintessencesearchlabs.in</a></p>
                </div>
            </div>
            <div className="Contact-area">
                <p>We are here to answer your questions 24/7, NEED A CONSULTATION?</p>
            </div>
            <div className="Contact-details">
                <div className="det">
                    <h3>Our Address</h3>
                    <p>Chennai, India</p>
                </div>
                <div className="det">
                    <h3>Our Mailbox</h3>
                    <p>Email: info@quintessencesearchlabs.in</p>
                </div>
                <div className="det">
                    <h3>Our Phone</h3>
                    <p>Phone: +91 12345 67890</p>
                </div>
            </div>
            <div className="Copyrights">
                <p>&#169; 2023 <a>Quintessence Search Labs</a></p>
            </div>
        </div>
    );
}


export default Home;