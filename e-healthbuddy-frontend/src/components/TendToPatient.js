
import { useState } from 'react';
import PatientHistory from './PatientHistory';
import { MDBDataTableV5 } from 'mdbreact';

const TendToPatient = () => {
    const [patient_id, setPatientId] = useState();
    const [search, setSearch] = useState(false);
    const [error, setError] = useState();
    const datatable = {
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
            label: "Doctor Address",
            field: 'address',
            width: 100,
          },
          {
            label: "Doctor Mobile",
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
    }

    const searchHandler = () => {
        const input = parseInt(document.getElementById('inp').value);
        if (!isNaN(input)) {
            setPatientId(input);
            setSearch(true);
            setError(null);
        } else {
            setSearch(false);
            setError('Please enter a valid patient id.')
        }
    }

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <div className="row">
                <input id="inp" type="text" placeholder="Enter patient id to check history..."></input>
                <button type="button" className="btn btn-primary" onClick={searchHandler}>Search</button>
                <span className="text-center ms-2" style={{color: 'red'}} dangerouslySetInnerHTML={{__html: error}} />
            </div>
            {search ? <PatientHistory pid={patient_id} consult={true}/> : <MDBDataTableV5 hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />}
        </div>
    )
}

export default TendToPatient
