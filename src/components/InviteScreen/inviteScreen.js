import React, { useEffect, useState } from 'react';
import './inviteScreen.css';
import MirrorballImage from "../../assets/Mirrorball_export.png";
import PatriarchyImage from '../../assets/Patriarchy_export.png'
import TicketImage from '../../assets/Ticket_export.png';
import AgeImage from '../../assets/Age_export.png';
import BarbieImage from '../../assets/Barbie_export.png';
import GabiImage from '../../assets/Gabi_export.png';
import GingerImage from '../../assets/Ginger_export.png';
import YouImage from '../../assets/You_export.png';
import Celebrating from '../../assets/Celebrating_export.png';
import CEO from '../../assets/CEO_export.png';
import DrinkTicket from '../../assets/Drink_site_export.png';
import LitraoTicket from '../../assets/Litrao_site_export.png';

const InviteScreen = () => {
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
            <div id='modal'  className='modal' onClick={() => { setShowTicket(0)}} >
                <img className='modal-content' src={showTicket > 1 ? DrinkTicket : LitraoTicket} />
            </div>
             <div className="Column">
                 <div>
                    <img src={MirrorballImage} className="Mirrorball" />
                    <img onClick={() => { handleTicketClick(1)}} src={PatriarchyImage} className="Patriarchy" />
                    <img src={GingerImage} className="Ginger" />
                    <img src={TicketImage} className="Ticket" />
                    <img src={BarbieImage} className="Barbie" />
                    <img src={YouImage} className="You" />
                    <img src={GabiImage} className="Gabi" />
                 </div>
             </div>
             <div  className="Column">
                 <img src={Celebrating} className="Celebrating" />
                 <img src={AgeImage} className="Age" />
                 <img onClick={() => { handleTicketClick(2)}} src={CEO} className="Ceo" />
                 <span className="Date">Dia: 05 de Agosto  |  Hora: 19:30</span>
                 <span className="Local">Local: Russo Bar (Av. Bento Goncalves, 4183)</span>
                 <p className="Pink">Ir de rosa não é obrigatório, mas fortemente recomendado!</p>
                 <span className="Info">Favor confirmar presença até dia 01 de Agosto.</span>
                 <span className="Info3">Podem levar acompanhantes, só me avisar!</span>
                 <span className="Info2">Comidinhas e bebidas do bar (dica: eles tem uma pizza maravilhosa!).</span>
             </div>
         </div>
    );
};

export default InviteScreen;