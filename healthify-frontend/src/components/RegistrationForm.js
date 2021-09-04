import { useState } from 'react';

const RegistrationForm = () => {
    const [activeButton, setActiveButton] = useState('user');
    const clickHandler = (e) => {
        setActiveButton(e.target.value);
    }

    return (
        <div className="container align-items-center justify-content-center">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Register Now!</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Get registered now!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className={`btn btn-outline-dark btn-lg px-3 shadow-none ${activeButton==='patient'? 'active': ' '}`} onClick={clickHandler} value='patient'>Patient</button>
                        <button type="button" className={`btn btn-outline-dark btn-lg px-3 shadow-none ${activeButton==='doctor'? 'active': ' '}`}  onClick={clickHandler} value='doctor'>Doctor</button>
                    </div>
                </div>
            </div>
            <div> 
                

            </div>
        </div>
    )
}

export default RegistrationForm
