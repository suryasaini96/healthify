import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router';
import './login.css'
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';
import ApiService from '../services/ApiService';
import { useLocation } from 'react-router-dom';

const Login = () => {

    const {setUser} = useContext(UserContext);
    const [login,setLogin] = useState();
    const [error, setError] = useState();
    const history = useHistory();
    const location = useLocation(); 
    
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
        ApiService.login(login)
            .then(resp => {
                let user = resp.data;
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
                setError(null);
                if (user.did) // then it's a doctor
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
              <div className="container ">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto my-container">
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
                        <button className="btn btn-lg btn-primary btn-login mb-2" type="submit" onClick={handleSignIn}>Sign in</button>
                        <div className="text-center">
                          {/* <a className="small me-2" href="!#">Forgot password?</a> */}
                          <Link to="/register" style={{textDecoration: "none"}}><span id="register-here">Register with us?</span></Link>  
                        </div>
                      </div>
                      <div className="text-center mt-2" style={{color: 'red', minHeight: '25px'}} dangerouslySetInnerHTML={{__html: error}} />
                      <div className="row" style={{minHeight: "30px"}}>
                        {location.state && <span className="text-center ms-2 lead" style={{color: 'blue'}} dangerouslySetInnerHTML={{__html: location.state.message}} />}
                      </div>  
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