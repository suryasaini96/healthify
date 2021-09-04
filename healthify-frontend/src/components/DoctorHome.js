import React, { useContext, useState } from 'react';
import TendToPatient from './TendToPatient';
import DoctorHistory from './DoctorHistory';
import { UserContext } from './UserContext';
import { useLocation } from 'react-router-dom';
import './dashboard.css';

const DoctorHome = () => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    const [activeButton, setActiveButton] = useState('tendToPatient');

    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className = 'container d-flex flex-column align-items-center justify-content-center dashboard'>
            <div className = "row">
                <div className = "btn-group"> 
                    <button type="button" style={{width: "400px"}} className={`btn me-4 btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='tendToPatient'? 'active': ' '}`} onClick={clickHandler} value='tendToPatient'>Tend to a patient</button>
                    <button type="button" style={{width: "400px"}} className={`btn btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='doctorPrevConsultations'? 'active': ' '}`}  onClick={clickHandler} value='doctorPrevConsultations'>My previous consultations</button>
                </div>
            </div>
            <div className = 'row'> 
                { activeButton === 'tendToPatient' && (<TendToPatient/>) }
                { activeButton === 'doctorPrevConsultations' && (<DoctorHistory did={user.did}/>)}
            </div>
            <div className="row" style={{minHeight: "30px"}}>
              {location.state && <span className="text-center ms-2 lead" style={{color: 'blue'}} dangerouslySetInnerHTML={{__html: location.state.message}} />}
            </div>
        </div>
    )
}

export default DoctorHome

