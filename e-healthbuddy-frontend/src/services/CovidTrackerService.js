import axios from 'axios';

const COVID_TRACKER_API_URL = 'http://localhost:8080/covid-api/in';

class CovidTrackerService { 
    getData() {
        return axios.get(COVID_TRACKER_API_URL).then((resp)=>{
            return resp.data.timeline.reverse();
        });
    }
}

export default new CovidTrackerService();
