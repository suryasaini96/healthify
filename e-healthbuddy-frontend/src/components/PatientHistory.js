import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export default function PatientHistory({pid}) {
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
              let rows = [];
              data.patient_consultations.forEach(c=>{
                c.consultations.forEach(cons=>{
                  rows.push({
                    name: c.doctor.name,
                    cid: cons.cid,
                    date: cons.date,
                    diagnosis: cons.diagnosis,
                    medicines: cons.medicines,
                    prognosis: cons.prognosis
                  })
                })
              })
              setDatatable(prevState=>({...prevState, rows}));
          }).catch(err => {
              console.log(err);
        })
  },[pid]);

  return <MDBDataTableV5 hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />;
}