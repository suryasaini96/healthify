import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

/* GET request URLs*/
const COVID_TRACKER_API_URL = `${BASE_URL}/covid-api/in`;
const PATIENT_INFO_API_URL = `${BASE_URL}/patient/id`;
const DOCTOR_INFO_API_URL = `${BASE_URL}/doctor/id`;
const FIND_DOCTOR_API_URL = `${BASE_URL}/doctor/city`;
const DOCTOR_CONSULTATIONS_API_URL = `${BASE_URL}/consultations/doctor`;
const PATIENT_CONSULTATIONS_API_URL = `${BASE_URL}/consultations/patient`;

/* POST request URLs*/
const LOGIN_API_URL = `${BASE_URL}/login`;
const CONSULTATION_FORM_API_URL = `${BASE_URL}/consultations/form`;
const PATIENT_REGISTRATION_API_URL = `${BASE_URL}/register/patient`;
const DOCTOR_REGISTRATION_API_URL = `${BASE_URL}/register/doctor`;

class ApiService { 
    covidTracker() {
        return axios.get(COVID_TRACKER_API_URL);
    }

    patientInfo(patient_id) {
        return axios.get(`${PATIENT_INFO_API_URL}/${patient_id}`);
    }

    doctorInfo(doctor_id) {
        return axios.get(`${DOCTOR_INFO_API_URL}/${doctor_id}`);
    }

    findDoctor(city, speciality) {
        return axios.get(`${FIND_DOCTOR_API_URL}/${city}?speciality=${speciality}`);
    }

    doctorConsultations(doctor_id) {
        return axios.get(`${DOCTOR_CONSULTATIONS_API_URL}/${doctor_id}`);
    }

    patientConsultations(patient_id) {
        return axios.get(`${PATIENT_CONSULTATIONS_API_URL}/${patient_id}`);
    }

    login(data) {
        return axios.post(LOGIN_API_URL, data);
    }

    giveConsultation(data) {
        return axios.post(CONSULTATION_FORM_API_URL, data); 
    }

    patientRegistration(data) {
        return axios.post(PATIENT_REGISTRATION_API_URL, data);
    }

    doctorRegistration(data) {
        return axios.post(DOCTOR_REGISTRATION_API_URL, data);
    }
}

export default new ApiService();
