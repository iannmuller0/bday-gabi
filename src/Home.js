import React, { useState } from 'react';
import LaunchScreen from "./components/launchScreen/launchScreen";
import InviteScreen from "./components/InviteScreen/";

const Home = () => {
    const [screen, setScreen] = useState(<LaunchScreen />);


    setTimeout(() => {  
        const elem = document.getElementById('container');
        elem?.classList.add('fade-out');
        setTimeout(() => {
            setScreen(<InviteScreen />);
            elem?.classList.remove('fade-out');
        }, 500)

    }, 3000);

    return (
            screen
    )

};

export default Home;