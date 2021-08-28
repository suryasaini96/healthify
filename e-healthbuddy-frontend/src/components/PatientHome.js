import React, {useState, useContext} from 'react'
import FindDoctor from './FindDoctor'
import PatientHistory from './PatientHistory';
import { UserContext } from './UserContext';

const PatientHome = () => {
    const {user} = useContext(UserContext);
    const [activeButton, setActiveButton] = useState('find');
    
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className = 'container' style={{marginTop: '56px'}}>
            <div className = 'row'> 
                <button type="button" className={`btn btn-outline-dark shadow-none ${activeButton==='find'? 'active': ' '}`} onClick={clickHandler} value='find'>Find a doctor</button>
                <button type="button" className={`btn btn-outline-dark shadow-none ${activeButton==='history'? 'active': ' '}`}  onClick={clickHandler} value='history'>My History</button>
            </div>
            <div className = 'row'>
                { activeButton === 'find' && (<FindDoctor/>) }
                { activeButton === 'history' && (<PatientHistory pid={user.pid}/>)}
            </div>
        </div>
    )
}

export default PatientHome
