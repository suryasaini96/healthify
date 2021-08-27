import axios from "axios";
import {useState} from 'react';

const FindDoctor = () => {

    const [search, setSearch] = useState(null);
    const [doctors, setDoctors] = useState(null);

    const inputHandler = (e) => {       
        let type = e.target.id;
        let data = e.target.value;
        if (type === 'city')
            setSearch(prevSearch => ({...prevSearch, city: data}))
        else if (type === 'speciality')
            setSearch(prevSearch => ({...prevSearch, speciality: data}))
    }

    const searchHandler = () => {
        axios.get(`http://localhost:8080/doctor/city/${search.city}?speciality=${search.speciality}`)
            .then(resp => {
                const data = resp.data;
                console.log(data);
                setDoctors(data);   
            }).catch(err=> {
                console.log(err);
            })
    }

    return (
        <div className = 'container'>
            <div className = 'row'> 
                <div className = "col-md-8">
                    <input id='city' type = "text" placeholder = "City" onChange = {inputHandler}/> 
                    <input id='speciality' type = "text" placeholder = "Speciality" onChange = {inputHandler}/> 
                </div>
                <div className = "col-md-4">
                    <button onClick={searchHandler}>Search</button>
                </div> 
            </div>
            { doctors ? 
                <div className = "row">
                    <table>
                        <thead>
                            <tr>
                                <th>Doctor ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {
                            doctors.map(doctor =>{
                                return <tr key = {doctor.did} > 
                                    <td>{doctor.did}</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.address}</td>
                                    <td>{doctor.mobile}</td>
                                    <td>{doctor.email}</td>
                                </tr> 
                            })  
                            }
                        </tbody>
                    </table>
                </div>
                :
                <div />
            }
            
        </div>
    )
}

export default FindDoctor
