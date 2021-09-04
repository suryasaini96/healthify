import axios from "axios";
import { MDBDataTableV5 } from "mdbreact";
import {useState} from 'react';

const FindDoctor = () => {
    const [search, setSearch] = useState(null);
    const [error, setError] = useState(null);
    const [datatable, setDatatable] = useState({
        columns: [
          {
            label: 'Doctor ID',
            field: 'did',
            width: 100,
          },
          {
            label: 'Name',
            field: 'name',
            width: 100,
          },
          {
            label: 'Address',
            field: 'address',
            width: 200,
          },
          {
            label: 'Mobile',
            field: 'mobile',
            width: 100,
          },
          {
            label: 'Email',
            field: 'email',
            width: 100,
          }
        ],
        rows: []
      });

    const inputHandler = (e) => {       
        let type = e.target.id;
        let data = e.target.value;
        if (type === 'city')
            setSearch(prevSearch => ({...prevSearch, city: data}))
        else if (type === 'speciality')
            setSearch(prevSearch => ({...prevSearch, speciality: data}))
    }

    const searchHandler = () => {
        if (search && search.city && search.speciality) {
            axios.get(`http://localhost:8080/doctor/city/${search.city}?speciality=${search.speciality}`)
                .then(resp => {
                    const data = resp.data.map(doctor => {
                        return {
                            did: doctor.did,
                            name: doctor.name,
                            address: doctor.address,
                            mobile: doctor.mobile,
                            email: doctor.email
                        }
                    })  
                    setDatatable(prevState=>({...prevState, rows: data}));
                    setError(null);   
                }).catch(() => {
                    setError('Error in fetching data.');
                })
        } else {
            setError('Please enter both fields!')
        }
    }

    return (
        <>
            <div className = 'container d-flex flex-column align-items-center justify-content-center'>
                <div className="row mt-1" style={{minHeight: "30px"}}>
                <span className="text-center ms-2 lead" style={{color: 'red'}} dangerouslySetInnerHTML={{__html: error}} />
                </div>
                <div className = 'row'> 
                    <div className ="btn-group">
                        <input id='city' className = "me-2" type = "text" placeholder = "City" onChange = {inputHandler}/> 
                        <input id='speciality' className = "me-2" type = "text" placeholder = "Speciality" onChange = {inputHandler}/>
                        <button className = "btn btn-success" onClick={searchHandler}>Search</button>
                    </div>
                </div>
                
                
            </div>
            <div className="mt-3">
                <MDBDataTableV5 hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
            </div>
        </>
    )
}

export default FindDoctor
