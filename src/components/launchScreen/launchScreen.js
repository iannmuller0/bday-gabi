import React from 'react';
import './launchScreen.css';
import LaunchImageMobile from "../../Launchscreen_mobile.png";
import LaunchImage from "../../Launchscreen_desktop.png";

const LaunchScreen = () => {
    return (
        <div className="BackgroundLaunch">
            <img src={window.screen.width < 930 ? LaunchImageMobile : LaunchImage} className="Img" />
        </div>
    );
};

export default LaunchScreen;