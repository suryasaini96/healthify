import axios from "axios";
import { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact';

const DoctorHistory = ({did}) => {
    //const [found, setFound] = useState(true);
    const [datatable, setDatatable] = useState({
        columns: [
        {
            label: 'Patient ID',
            field: 'pid',
            width: 100,
        },
        {
            label: 'Patient',
            field: 'name',
            width: 100,
            attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'Name',
            },
        },
        {
            label: 'Patient Address',
            field: 'address',
            width: 200,
        },
        {
            label: 'Patient Mobile',
            field: 'mobile',
            width: 100,
        },
        {
            label: 'Consultation ID',
            field: 'cid',
            width: 200,
        },
        {
            label: 'Date',
            field: 'date',
            width: 200,
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
        axios.get(`http://localhost:8080/consultations/doctor/${did}`)
            .then(resp => {
                const data = resp.data;
                let rows = [];
                data.doctor_consultations.forEach(c=>{
                    c.consultations.forEach(cons=>{
                    rows.push({
                        name: c.patient.name,
                        pid: c.patient.pid,
                        address: c.patient.address,
                        mobile: c.patient.mobile,
                        cid: cons.cid,
                        date: cons.date,
                        diagnosis: cons.diagnosis,
                        medicines: cons.medicines,
                        prognosis: cons.prognosis
                    })
                    })
                })
                setDatatable(prevState=>({...prevState, rows}));
            }).catch(() => {
                setDatatable(prevState=>({...prevState, rows: []}));
            })
    },[did]);

  return (
    <div>
      <MDBDataTableV5 hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
    </div>
  );
}

export default DoctorHistory
