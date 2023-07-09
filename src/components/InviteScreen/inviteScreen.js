import React from 'react';
import './inviteScreen.css';
import MirrorballMobile from "../../Mirrorball_mobile.png";
import MirrorballImage from "../../Mirrorball_export.png";
import PatriarchyImage from '../../Patriarchy_export.png'
import PatriarchyMobile from '../../Patriarchy_mobile_export.png'
import TicketImage from '../../Ticket_export.png';
import TicketMobile from '../../Ticket_mobile_export.png'
import AgeImage from '../../Age_export.png';
import AgeMobile from '../../Age_mobile_export.png';
import BarbieImage from '../../Barbie_export.png';
import BarbieMobile from '../../Barbie_mobile_export.png';
import GabiImage from '../../Gabi_export.png';
import GabiMobile from '../../Gabi_mobile_export.png';
import GingerImage from '../../Ginger_export.png';
import GingerMobile from '../../Ginger_mobile_export.png';
import YouImage from '../../You_export.png';
import YouMobile from '../../You_mobile_export.png';
import Celebrating from '../../Celebrating_export.png';
import CEO from '../../CEO_export.png';

const InviteScreen = () => {
    return (
         <div className="Background">
             <div className="Column">
                 <div>
                 <img src={window.screen.width < 930 ? MirrorballMobile : MirrorballImage} className="Mirrorball" />
                 <img src={window.screen.width < 930 ? PatriarchyMobile : PatriarchyImage} className="Patriarchy" />
                 <img src={window.screen.width < 930 ? GingerMobile : GingerImage} className="Ginger" />
                 <img src={window.screen.width < 930 ? TicketMobile : TicketImage} className="Ticket" />
                 <img src={window.screen.width < 930 ? BarbieMobile : BarbieImage} className="Barbie" />
                 <img src={window.screen.width < 930 ? YouMobile : YouImage} className="You" />
                 <img src={window.screen.width < 930 ? GabiMobile : GabiImage} className="Gabi" />
                 </div>
             </div>
             <div  className="Column">
                 <img src={Celebrating} className="Celebrating" />
                 <img src={window.screen.width < 930 ? AgeMobile : AgeImage} className="Age" />
                 <img src={CEO} className="Ceo" />
                 <span className="Date">Dia: 05 de Agosto  |  Hora: 19:30</span>
                 <span className="Local">Local: Russo Bar (Av. Bento Goncalves, 4183)</span>
                 <p className="Pink">Ir de rosa não é obrigatório, mas fortemente recomendado!</p>
                 <span className="Info">
                     Favor confirmar presença até dia 01 de Agosto.
                     Podem levar acompanhantes, só me avisar!</span>
                 <span className="Info2">Comidinhas e bebidas do bar (dica: eles tem uma pizza maravilhosa!).</span>
             </div>
         </div>
    )
};

export default InviteScreen;