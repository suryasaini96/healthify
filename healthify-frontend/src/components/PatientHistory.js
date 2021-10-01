import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';

export default function PatientHistory({pid, consult}) {
  const [found, setFound] = useState(true);
  const [patient, setPatient] = useState();  
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Doctor',
        field: 'name',
        width: 110,
      },
      {
        label: 'Doctor Address',
        field: 'address',
        width: 270,
      },
      {
        label: 'Doctor Mobile',
        field: 'mobile',
        width: 150,
      },
      {
        label: 'Consultation ID',
        field: 'cid',
        width: 151,
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
      ApiService.patientConsultations(pid)
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
        <table className="table caption-top">
          <caption className="text-center"><b>Patient Details</b></caption>
          <thead className = "table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td >{patient.pid}</td>
              <td>{patient.name}</td>
              <td>{patient.mobile}</td>
              <td>{patient.email}</td>
              <td>{patient.address}</td>
              <td>{patient.city}</td>
            </tr>
          </tbody>
        </table>
      }
      <div className = 'row mt-4'>
        <MDBDataTableV5 small scrollX hover order={['date', 'asc']} entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
      </div>
      <div>
        {found && consult ? <Link to={{pathname: '/consult', state: {patient: JSON.stringify(patient)}}} className="btn btn-primary">Consult</Link> : ''}
      </div>
    </div>
  );
}