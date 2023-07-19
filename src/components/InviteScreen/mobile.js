import React, { useEffect, useState } from 'react';
import './inviteMobile.css';
import MirrorballImage from "../../assets/Mirrorball_mobile.png";
import PatriarchyImage from '../../assets/Patriarchy_mobile_export.png'
import TicketImage from '../../assets/Ticket_mobile_export.png';
import AgeImage from '../../assets/Age_mobile_export.png';
import BarbieImage from '../../assets/Barbie_mobile_export.png';
import GabiImage from '../../assets/Gabi_mobile_export.png';
import GingerImage from '../../assets/Ginger_mobile_export.png';
import YouImage from '../../assets/You_mobile_export.png';
import Celebrating from '../../assets/Celebrating_export.png';
import CEO from '../../assets/CEO_export.png';
import DrinkTicket from '../../assets/Drink_site_export.png';
import LitraoTicket from '../../assets/Litrao_site_export.png';

const InviteMobileScreen = () => {
    const [showTicket, setShowTicket] = useState(0);

    useEffect(()=> {
        if (showTicket > 0) {
            document.getElementById('modal').style.display = 'flex';
        } else {
            document.getElementById('modal').style.display = 'none';
        }
    }, [showTicket])

    const handleTicketClick = (value) => {
        setShowTicket(value);

        setTimeout(() => {  
            const elem = document.getElementById('modal');
            elem.classList.add('fade-out');
            setTimeout(() => {
                setShowTicket(0);
                elem.classList.remove('fade-out');
            }, 1000)
    
        }, 5000);
        
    };

    return (
         <div className="Background">
            <div id='modal' onClick={() => setShowTicket(0)} className='modal'>
                <img className='modal-content' onClick={() => { handleTicketClick(1)}} src={showTicket > 1 ? DrinkTicket : LitraoTicket} />
            </div>
            <div className='Header'>
                <img onClick={() => { handleTicketClick(1)}} src={PatriarchyImage} className="PatriarchyMob" />
                <img onClick={() => { handleTicketClick(1)}} src={MirrorballImage} className="MirrorballMob" />
            </div>
            <div className='secondRow'>
                <img src={Celebrating} className="CelebratingMob" />
                <div className='AgeWrapper'>
                    <img src={AgeImage} className="AgeMob" />
                    <img onClick={() => { handleTicketClick(2)}} src={CEO} className="CeoMob" />
                </div>
                <span className="Date">Dia: 05 de Agosto  |  Hora: 19:30</span>
                <span className="Local">Local: Russo Bar (Av. Bento Goncalves, 4183)</span>
            </div>
            <div className='ThirdRow'>
                <div className='flex'>
                    <div className='relative'>
                        <img src={GingerImage} className="GingerMob" />
                        <img src={BarbieImage} className="BarbieMob" />
                    </div>
                    <img src={TicketImage} className="TicketMob" />
                </div>
                <div className='forthRow'>
                <div className='relative'>
                    <img src={YouImage} className="YouMob" />
                    <img src={GabiImage} className="GabiMob" />
                </div>
                </div>
            </div>
            <div className='TextRow'>
                <p className="Pink" style={{margin: '0 0 10px 0', maxWidth: '100%'}}>Ir de rosa não é obrigatório, mas fortemente recomendado!</p>
                <p className="Info" style={{margin: 0, maxWidth: '100%'}}>Favor confirmar presença até dia 01 de Agosto.</p>
                <p className="Info3" style={{margin: 0, maxWidth: '100%'}}>Podem levar acompanhantes, só me avisar!</p>
                <p className="Info2" style={{margin: 0, maxWidth: '100%'}}>Comidinhas e bebidas do bar (dica: eles tem uma pizza maravilhosa!).</p>
            </div>
         </div>
    );
};

export default InviteMobileScreen;