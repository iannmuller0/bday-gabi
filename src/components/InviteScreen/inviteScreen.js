import React, { useEffect, useState } from 'react';
import './inviteScreen.css';
import MirrorballImage from "../../Mirrorball_export.png";
import PatriarchyImage from '../../Patriarchy_export.png'
import TicketImage from '../../Ticket_export.png';
import AgeImage from '../../Age_export.png';
import BarbieImage from '../../Barbie_export.png';
import GabiImage from '../../Gabi_export.png';
import GingerImage from '../../Ginger_export.png';
import YouImage from '../../You_export.png';
import Celebrating from '../../Celebrating_export.png';
import CEO from '../../CEO_export.png';
import DrinkTicket from '../../Drink_site_export.png';
import LitraoTicket from '../../Litrao_site_export.png';

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

        setTimeout(() => { setShowTicket(0)}, 3000);
        
    };

    return (
         <div className="Background">
            <div id='modal' className='modal'>
                <img className='modal-content' onClick={() => { handleTicketClick(1)}} src={showTicket > 1 ? DrinkTicket : LitraoTicket} />
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