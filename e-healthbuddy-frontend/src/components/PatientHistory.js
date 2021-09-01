import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PatientHistory({pid, consult}) {
  const [found, setFound] = useState(true);
  const [patient, setPatient] = useState();  
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Doctor',
        field: 'name',
        width: 100,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Doctor Address',
        field: 'address',
        width: 100,
      },
      {
        label: 'Doctor Mobile',
        field: 'mobile',
        width: 100,
      },
      {
        label: 'Consultation ID',
        field: 'cid',
        width: 100,
      },
      {
        label: 'Date',
        field: 'date',
        width: 100,
      },
      {
        label: 'Diagnosis',
        field: 'diagnosis',
        width: 200,
      },
      {
        label: 'Medicines',
        field: 'medicines',
        width: 200,
      },
      {
        label: 'Prognosis',
        field: 'prognosis',
        width: 200,
      },
    ],
    rows: []
  });

  useEffect(() => {
      axios.get(`http://localhost:8080/consultations/patient/${pid}`)
          .then(resp => {
              const data = resp.data;
              setPatient(data.patient);
              let rows = [];
              data.patient_consultations.forEach(c=>{
                c.consultations.forEach(cons=>{
                  rows.push({
                    name: c.doctor.name,
                    address: c.doctor.address,
                    mobile: c.doctor.mobile,
                    cid: cons.cid,
                    date: cons.date,
                    diagnosis: cons.diagnosis,
                    medicines: cons.medicines,
                    prognosis: cons.prognosis
                  })
                })
              })
              setDatatable(prevState=>({...prevState, rows}));
              setFound(true);
          }).catch(() => {
              setDatatable(prevState=>({...prevState, rows: []}));
              setFound(false);
        })
  },[pid]);

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">  
      { found && consult && patient && 
        <div class="container">
          <div class="row">
            <div class="col-2">
              <p>Patient ID: {patient.pid}</p>
            </div>
            <div class="col-2">
              <p>Name: {patient.name}</p>
            </div>
            <div class="col-2">
              <p>Mobile: {patient.mobile}</p>
            </div>
            <div class="col-2">
              <p>Email: {patient.email}</p>
            </div>
            <div class="col-2">
              <p>Address: {patient.address}</p>
            </div>
            <div class="col-2">
              <p>City: {patient.city}</p>
            </div>
          </div>
          </div>
      }
      <div className = 'row mt-4'>
        <MDBDataTableV5 hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
      </div>
      <div>
        {found && consult ? <Link to={{pathname: '/consult', state: {patient: JSON.stringify(patient)}}} className="btn btn-primary">Consult</Link> : ''}
      </div>
    </div>
  );
}