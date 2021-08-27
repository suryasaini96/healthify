import React, {useState} from 'react'
import FindDoctor from './FindDoctor'


const PatientHome = () => {

    const [component, setComponent] = useState();

    const clickHandler = (e) => {
        let button = e.target.value;
        if (button === 'find')
            setComponent(<FindDoctor/>)
        else if (button === 'history')
            setComponent();
    }

    return (
        <div className = 'container' style={{marginTop: '56px'}}>
            <div className = 'row'> 
                <button onClick={clickHandler} value='find'>Find a doctor</button>
                <button onClick={clickHandler} value='history'>My History</button>
            </div>

            <div className = 'row'>
                {component}
            </div> 
            
        </div>
        
    )
}

export default PatientHome
