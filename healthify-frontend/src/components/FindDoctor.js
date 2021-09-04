import { MDBDataTableV5 } from "mdbreact";
import {useState} from 'react';
import ApiService from "../services/ApiService";

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
            width: 250,
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
            ApiService.findDoctor(search.city, search.speciality)
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

    const enterPressed = (event) => {
        if (event.key === 'Enter') {
            searchHandler();
        }
    }

    return (
        <>
            <div className = 'container d-flex flex-column align-items-center justify-content-center'>
                <div className="row mt-1" style={{minHeight: "30px"}}>
                <span className="text-center ms-2 lead" style={{color: 'red'}} dangerouslySetInnerHTML={{__html: error}} />
                </div>
                <div className = 'row mt-1'> 
                    <div className ="btn-group">
                        <input id='city' className = "me-2" type = "text" placeholder = "City" onChange = {inputHandler} onKeyPress={enterPressed}/> 
                        <input id='speciality' className = "me-2" type = "text" placeholder = "Speciality" onChange = {inputHandler} onKeyPress={enterPressed}/>
                        <button className = "btn btn-success" onClick={searchHandler}>Search</button>
                    </div>
                </div>
                
                
            </div>
            <div className="mt-4">
                <MDBDataTableV5 small scrollY scrollX hover entriesOptions={[5, 10, 15, 20]} entries={5} pagesAmount={4} data={datatable} />
            </div>
        </>
    )
}

export default FindDoctor
