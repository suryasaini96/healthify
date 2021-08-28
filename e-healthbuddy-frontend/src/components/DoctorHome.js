import React, { useContext, useState } from 'react'
import PatientHistory from './PatientHistory';
import TendToPatient from './TendToPatient';
import { UserContext } from './UserContext';

const DoctorHome = () => {

    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('find');
    
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className = 'container' style={{marginTop: '56px'}}>
            <div className = 'row'> 
                <button type="button" className={`btn btn-outline-dark shadow-none ${activeButton==='tendToPatient'? 'active': ' '}`} onClick={clickHandler} value='tendToPatient'>Tend to a patient</button>
                <button type="button" className={`btn btn-outline-dark shadow-none ${activeButton==='doctorPrevConsultations'? 'active': ' '}`}  onClick={clickHandler} value='doctorPrevConsultations'>List of previous consultations</button>
            </div>
            <div className = 'row'>
                { activeButton === 'tendToPatient' && (<TendToPatient/>) }
                { activeButton === 'doctorPrevConsultations' && (<PatientHistory pid={user.pid}/>)}
            </div>
        </div>
    )
}

export default DoctorHome

