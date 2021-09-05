import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { useRef } from 'react';
import ApiService from '../services/ApiService';
import { useHistory } from 'react-router-dom';

const PatientRegistration = () => {

    const history = useHistory();
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

    const submitHandler = (data) => {
        console.log(JSON.stringify(data));
        ApiService.patientRegistration(data)
            .then(resp=>{
                console.log(resp.data);
                history.push({
                    pathname: '/login',
                    state: { message: resp.data }
                });
            }).catch(err => {
                console.log(err);
            })
    }  

    return (
        <form onSubmit={handleSubmit(submitHandler)} method="post" className="needs-validation" noValidate autoComplete="off">
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className="form-group">
                <div className="row">
                    <div className="col position-relative">
                        <input type="text" className={classNames("form-control",{"is-invalid": errors.pid})} name="pid" placeholder="Patient ID" 
                        {...register('pid', { 
                            required: "Please enter a patient ID.",
                            pattern: {
                                value: /^\d{1,5}$/, 
                                message: "Should be 1 to 5 digits only."
                            }
                        })}/> 
                        {errors.pid && <div className="invalid-tooltip">{errors.pid.message}</div>}
                    </div>
                    <div className="col position-relative">
                        <input type="text" className={classNames("form-control",{"is-invalid": errors.name})} name="name" placeholder="Name" 
                        {...register('name', { 
                            required: "Please enter your full name.",
                            minLength: {
                                value: 4,
                                message: "Should be at least 4 characters"
                            },
                            pattern: {
                                value: /^(?![\. ])[a-zA-Z\. ]+(?<! )$/,
                                message: "Invalid name."
                            }
                        })}
                        />
                        {errors.name && <div className="invalid-tooltip">{errors.name.message}</div>}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col position-relative">
                    <input type="email" className={classNames("form-control",{"is-invalid": errors.email})}  name="email" placeholder="Email"
                        {...register('email', { 
                                required: "Please enter your email.",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email."
                                }
                            }
                        )}
                    />
                    {errors.email && <div className="invalid-tooltip">{errors.email.message}</div>}
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col position-relative">
                        <input type="password" className={classNames("form-control",{"is-invalid": errors.password})} name="password" placeholder="Password" 
                            {...register('password', { 
                                    required: "Please enter your password.",
                                    minLength: {
                                        value: 8,
                                        message: "Should be at least 8 characters."
                                    }
                                }
                            )}
                        />
                        {errors.password && <div className="invalid-tooltip">{errors.password.message}</div>}
                    </div>
                    <div className="col position-relative">
                        <input type="password" className={classNames("form-control",{"is-invalid": errors.confirm_password})} name="confirm_password" placeholder="Confirm Password" 
                            {...register('confirm_password', {
                                validate: value =>
                                    value === password.current || "The passwords do not match."
                                }
                            )}
                        />
                        {errors.confirm_password && <div className="invalid-tooltip">{errors.confirm_password.message}</div>}
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="col position-relative">
                    <input type="text" className={classNames("form-control",{"is-invalid": errors.mobile})} name="mobile" placeholder="Mobile" 
                        {...register('mobile', { 
                                required: "Please enter your mobile.",
                                pattern: {
                                    value: /^[789]\d{9}$/,
                                    message: "Invalid mobile number."
                                }
                            }
                        )}
                    />
                    {errors.mobile && <div className="invalid-tooltip">{errors.mobile.message}</div>}
                </div>
            </div>
            <div className="form-group">
                <div className="col position-relative">
                    <input type="text" className={classNames("form-control",{"is-invalid": errors.aadhar})} name="aadhar" placeholder="Aadhar" 
                        {...register('aadhar', { 
                                required: "Please enter your aadhar.",
                                pattern: {
                                    value: /^\d{12}$/,
                                    message: "Invalid aadhar number."
                                }
                            }
                        )}
                    />
                    {errors.aadhar && <div className="invalid-tooltip">{errors.aadhar.message}</div>}
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col position-relative">
                        <input type="text" className={classNames("form-control",{"is-invalid": errors.address})} name="address" placeholder="Address" 
                            {...register('address', { 
                                    required: "Please enter your address.",
                                    minLength: {
                                        value: 10,
                                        message: "Should be at least 10 characters."
                                    }
                                }
                            )}
                        />
                        {errors.address && <div className="invalid-tooltip">{errors.address.message}</div>}
                    </div>
                    <div className="col-4 position-relative">
                        <input type="text" className={classNames("form-control",{"is-invalid": errors.city})}  name="city" placeholder="City" 
                            {...register('city', { 
                                    required: "Please enter your city.",
                                    minLength: {
                                        value: 5,
                                        message: "Should be at least 5 characters."
                                    }
                                }
                            )}
                        />
                        {errors.city && <div className="invalid-tooltip">{errors.city.message}</div>}
                    </div>
                </div>
            </div>
            <div className="form-group position-relative">
                <input type="text" className={classNames("form-control",{"is-invalid": errors.dob})} name="dob" placeholder="Date of birth in yyyy-MM-dd" 
                    {...register('dob', { 
                            required: "Please enter your date of birth.",
                            pattern: {
                                value: /^\d{4}-\d{2}-\d{2}$/,
                                message: "Invalid date of birth."
                            }
                        }
                    )}
                />
                {errors.dob && <div className="invalid-tooltip">{errors.dob.message}</div>}
            </div>
            <div className="form-group">
                <label className="form-check-label">
                    <input type="checkbox" className={classNames("form-check-input", {"is-invalid": errors.tnc})} name="tnc"
                        {...register('tnc', { 
                                required: "Please agree to the terms and conditions."
                            }
                        )} 
                    /> I hereby declare that the above information is true to the best of my knowledge.
                </label>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg text-dark">Sign Up</button>
            </div>
        </form>
    )
}

export default PatientRegistration
