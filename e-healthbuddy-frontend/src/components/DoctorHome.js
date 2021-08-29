import React, { useContext, useState } from 'react';
import TendToPatient from './TendToPatient';
import DoctorHistory from './DoctorHistory';
import { UserContext } from './UserContext';

const DoctorHome = () => {
    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('tendToPatient');

    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className = 'container d-flex flex-column align-items-center justify-content-center' style={{marginTop: '56px'}}>
            <div className = 'row'> 
                <button type="button" className={`btn btn-outline-dark shadow-none rounded-pill ${activeButton==='tendToPatient'? 'active': ' '}`} onClick={clickHandler} value='tendToPatient'>Tend to a patient</button>
                <button type="button" className={`btn btn-outline-dark shadow-none rounded-pill ${activeButton==='doctorPrevConsultations'? 'active': ' '}`}  onClick={clickHandler} value='doctorPrevConsultations'>My list of previous consultations</button>
            </div>
            <div className = 'row'>
                { activeButton === 'tendToPatient' && (<TendToPatient/>) }
                { activeButton === 'doctorPrevConsultations' && (<DoctorHistory did={user.did}/>)}
            </div>
        </div>
    )
}

export default DoctorHome

