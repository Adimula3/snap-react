import React from "react";
import {Col, Row} from "react-bootstrap";
import '../styles/style.css';
import ImageHeroDesktop from '../assets/image-hero-desktop.png'
import ClientAudiophile from '../assets/client-audiophile.svg';
import ClientData from '../assets/client-databiz.svg';
import ClientMaker from '../assets/client-maker.svg';
import ClientMeet from '../assets/client-meet.svg';
const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <Row>
                    <Col lg={6}>
                        <h1>Make<br/> remote work</h1>
                        <p>Get your team in sync. no matter your location,<br/>
                           Streamline processes, create team rituals and<br/>
                            watch productivity soar.</p>
                        <button className="btn btn-dark">Learn more</button>
                        <div className="logos d-flex">
                            <img className="images" src={ClientData} alt=""/>
                            <img className="imagess" src={ClientAudiophile} alt=""/>
                            <img className="images" src={ClientMeet} alt=""/>
                            <img className="images" src={ClientMaker} alt=""/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <img className="image" src={ImageHeroDesktop} alt=""/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
export default Hero;
