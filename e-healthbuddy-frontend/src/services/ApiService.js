import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

/* GET request URLs*/
const COVID_TRACKER_API_URL = `${BASE_URL}/covid-api/in`;
const PATIENT_INFO_API_URL = `${BASE_URL}/patient/id/`;
const DOCTOR_INFO_API_URL = `${BASE_URL}/doctor/id/`;
const FIND_DOCTOR_API_URL = `${BASE_URL}/doctor/city/`;
const DOCTOR_CONSULTATIONS_API_URL = `${BASE_URL}/consultations/doctor/`;
const PATIENT_CONSULTATIONS_API_URL = `${BASE_URL}/consultations/patient/`;

/* POST request URLs*/
const LOGIN_API_URL = `${BASE_URL}/login`;
const CONSULTATION_FORM_API_URL = `${BASE_URL}/consultations/form`;

class ApiService { 
    covidTracker() {
        return axios.get(COVID_TRACKER_API_URL);
    }
}

export default new ApiService();
