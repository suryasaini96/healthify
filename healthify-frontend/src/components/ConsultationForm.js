import { useHistory, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from './UserContext';
import ApiService from "../services/ApiService";

const ConsultationForm = () => {
    const {user} = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const patient = location.state?JSON.parse(location.state.patient): null;

    const _calculateAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
    
    const submitHandler = (e)=> {
        e.preventDefault();
        const data = {
            doctor_id: user.did,
            patient_id: patient.pid,
            diagnosis: document.getElementById('diagnosis').value,
            medicines: document.getElementById('medicines').value,
            prognosis: document.getElementById('prognosis').value
        }
        ApiService.giveConsultation(data)
            .then(resp => {
                history.push({
                    pathname: '/doctor',
                    state: { message: resp.data }
                });
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        
        <div className="container d-flex flex-column align-items-center justify-content-center" style={{minHeight: "100vh", width: "40%"}}>
            {patient && <div>
                <h1 className="display-6 text-center mb-5 ">Consultation Form</h1>
                <form className="row g-3">
                    <div className="col-lg-2">
                        <label htmlFor="patient_id" className="form-label">Patient ID</label>
                        <input type="text" className="form-control" id="patient_id" placeholder={patient.pid} disabled readOnly/>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder={patient.name} disabled readOnly/>
                    </div>
                    <div className="col-lg-2">
                        <label htmlFor="age" className="form-label">Age</label>
                        <input type="text" className="form-control" id="age" placeholder={_calculateAge(patient.dob)} disabled readOnly/>
                    </div>
                    <div className="col-lg-4">
                        <label htmlFor="mobile" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="mobile" placeholder={patient.mobile} disabled readOnly/>
                    </div>
                    <div className="col-12">
                        <label for="diagnosis" className="form-label">Diagnosis</label>
                        <textarea className="form-control" id="diagnosis" rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                        <label for="medicines" className="form-label">Medicines</label>
                        <textarea className="form-control" id="medicines" rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                        <label for="prognosis" className="form-label">Prognosis</label>
                        <textarea className="form-control" id="prognosis" rows="3" required></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={submitHandler} className="btn btn-primary">Give Consultation</button>
                    </div>
                </form>
            </div>} 
        </div>
    )
}

export default ConsultationForm
