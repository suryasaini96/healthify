import axios from 'axios';
import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router';
import './login.css'
import { UserContext } from './UserContext';

const Login = () => {

    const {setUser} = useContext(UserContext);
    const [login,setLogin] = useState();
    const [error, setError] = useState(null);
    const history = useHistory(); 
    
    const setData = (event) => {
        let data = event.target.value;
        let id = event.target.id;
        if (id === 'floatingPassword') {
            setLogin(prevData => ({...prevData, password: data}));
        } else if (id === 'floatingInput') {
            setLogin(prevData => ({...prevData, email: data}));
        }        
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login', login)
            .then(resp => {
                setUser(resp.data);
                console.log(resp.data);
                setError(null);
                if (resp.data.speciality != null) // then it's a doctor
                    history.push("/doctor");
                else  
                    history.push("/patient");
            }).catch(() => {
                setUser(null);
                setError('Invalid Login!');
            })
    }

    return (
        <div className="container-fluid ps-md-0" style= {{marginTop: "56px"}}>
        <div className="row g-0">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4" >Welcome back!</h3>
                    <form>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={setData}/>
                        <label htmlFor="floatingInput">Email address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={setData}/>
                        <label htmlFor="floatingPassword">Password</label>
                      </div>  
                      <div className="d-grid">
                        <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit" onClick={handleSignIn}>Sign in</button>
                        <div className="text-center">
                          <a className="small me-2" href="#">Forgot password?</a>
                          <a className="small" href="#">Register with us?</a>
                        </div>
                      </div>
                      <div className="text-center mt-2" style={{color: 'red', minHeight: '25px'}} dangerouslySetInnerHTML={{__html: error}} />  
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login