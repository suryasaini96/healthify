import { useState, useEffect } from "react";
import { MDBDataTableV5 } from 'mdbreact';
import ApiService from "../services/ApiService";

const DoctorHistory = ({did}) => {
    const [datatable, setDatatable] = useState({
        columns: [
        {
            label: 'Patient ID',
            field: 'pid',
            width: 110,
        },
        {
            label: 'Patient',
            field: 'name',
            width: 100,
        },
        {
            label: 'Patient Address',
            field: 'address',
            width: 250,
        },
        {
            label: 'Patient Mobile',
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
        ApiService.doctorConsultations(did)
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
    <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className = 'row mt-4'>
            <MDBDataTableV5 small scrollX hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
        </div>
    </div>
  );
}

export default DoctorHistory
