
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PatientHistory from './PatientHistory';

const TendToPatient = () => {
    const [patient_id, setPatientId] = useState();
    const [search, setSearch] = useState(false);
    const [error, setError] = useState();

    const searchHandler = (e) => {
        if (!isNaN(patient_id)) {
            setSearch(true);
            setError(null);
        } else {
            setSearch(false);
            setError('Please enter a valid patient id.')
        }
    }

    return (
        <div className="container">
            <div className="row">
                <input type="text" placeholder="Enter patient id..." onChange={(e)=>setPatientId(e.target.value)}></input>
                <button type="button" className="btn btn-primary" onClick={searchHandler}>Search</button>
                <span className="text-center ms-2" style={{color: 'red'}} dangerouslySetInnerHTML={{__html: error}} />
            </div>
            
            {search === true ? (
                <div>
                    <PatientHistory pid={patient_id}/>
                    <Link to={`/consult/${patient_id}`} className="btn btn-primary">Consult</Link>
                </div>
            )
            : <PatientHistory pid={null}/>}
        </div>
    )
}

export default TendToPatient
