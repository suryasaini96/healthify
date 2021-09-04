import React, {useState, useContext} from 'react'
import FindDoctor from './FindDoctor'
import PatientHistory from './PatientHistory';
import { UserContext } from './UserContext';
import './dashboard.css';

const PatientHome = () => {
    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('find');
    
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className = 'container d-flex flex-column align-items-center justify-content-center dashboard' >
            <div className = 'row'>
                <div className = "btn-group"> 
                    <button type="button" style={{width: "400px"}} className={`btn me-4 btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='find'? 'active': ' '}`} onClick={clickHandler} value='find'>Find a doctor</button>
                    <button type="button" style={{width: "400px"}} className={`btn btn-lg btn-outline-dark shadow-none rounded-pill ${activeButton==='history'? 'active': ' '}`}  onClick={clickHandler} value='history'>My History</button>
                </div>
            </div>
            <div className = 'row'>
                { activeButton === 'find' && (<FindDoctor/>) }
                { activeButton === 'history' && (<PatientHistory pid={user.pid}/>)}
            </div>
        </div>
    )
}

export default PatientHome
