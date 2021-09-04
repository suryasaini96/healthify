import { UserContext } from "./UserContext";
import {useState, useContext, useEffect} from 'react';
import axios from "axios";

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
//Datatable Modules
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery';

const PatientHistoryOld = () => {
    const {user, setUser} = useContext(UserContext);
    const [history, setHistory] = useState(null);

    useEffect(() => {
        if (user){
            axios.get(`http://localhost:8080/consultations/patient/${user.pid}`)
                .then(resp => {
                    const data = resp.data;
                    console.log(data);
                    setHistory(data);
                }).catch(err => {
                    console.log(err);
                })
        }
    },[]);

    useEffect(() => {
            $('#dataTable').DataTable();
    },[history]);
  

    return (
        <div className = "container">
            <div className = "row">
                <div>
                    <table cellPadding="20px" className="table" id="dataTable">
                        <thead>
                            <tr>
                                <th>Doctor</th>
                                <th>Consultation ID</th><th>Date</th><th>Diagnosis</th><th>Medicines</th><th>Prognosis</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                history &&  
                                history.patient_consultations.map(c =>
                                    c.consultations.map((cons,index) =>
                                        <tr key={cons.cid}>
                                            { index==0 ? <td rowSpan = {`${c.consultations.length}`}>{c.doctor.name}</td>:''}
                                            <td>{cons.cid}</td><td>{cons.date}</td><td>{cons.diagnosis}</td><td>{cons.medicines}</td><td>{cons.prognosis}</td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>             
        </div>
    )
}

// $('#dataTable').DataTable();

// $(document).ready(function() {
//     $('#dataTable').DataTable();
// });

export default PatientHistoryOld
