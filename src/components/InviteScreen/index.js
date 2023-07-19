import React from 'react';
import InviteScreen from './inviteScreen';
import InviteMobile from './mobile'

const Home = () => {
    return (
        window.screen.width < 930 ? <InviteMobile /> : <InviteScreen />
    )

};

export default Home;