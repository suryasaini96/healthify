import React, {useState, useEffect} from "react";
import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import ApiService from "../services/ApiService";

const CovidTracker = () => {
    const [data, setData] = useState({
      population: 0, 
      latest_data: {
        deaths: 0,
        confirmed: 0,
        recovered: 0
      }
    });
    const [lineGraphData, setLineGraphData] = useState(null);
    const [barGraphData, setBarGraphData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
      ApiService.covidTracker()
        .then(resp => {
          const timeline_data = resp.data.timeline.reverse().filter(data=> data.recovered!==0);
          const recent_data = resp.data.timeline.reverse().slice(0,7).reverse();
          setData(resp.data);
          setLineGraphData(timeline_data);
          setBarGraphData(recent_data);
          setIsLoading(false);
        }).catch(err => {
          console.log(err);
        })
    },[]);

  return (
    <div >
      {isLoading && <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> 
      </div>}
      {lineGraphData && barGraphData &&
        <div className="container" style= {{paddingTop: "80px", height: '100vh'}}>
          <div className="row">
            <div className="col-md-3">
              <h4>Population: {data.population.toLocaleString()}</h4>
            </div>
            <div className="col-md-3">
              <h4 >Cases: {data.latest_data.confirmed.toLocaleString()}</h4>
            </div>
            <div className="col-md-3">
              <h4>Deaths: {data.latest_data.deaths.toLocaleString()}</h4>
            </div>
            <div className="col-md-3">
              <h4>Recovered: {data.latest_data.recovered.toLocaleString()}</h4>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-lg-12">
              <h4 className="text-center">Cumulative</h4>
              <div className = "d-flex align-items-center justify-content-center">
              <LineChart width={730} height={365} data={lineGraphData} margin={{ top: 5, right: 30, left: 50, bottom: 20 }}>
                <CartesianGrid strokeDasharray="" horizontal={true} vertical={false} />
                <XAxis dataKey="date" />
                <YAxis label={{ value: "Number of cases", offset: 30, angle: -90, position: "left" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="confirmed" dot={{ fill: '#8884d8' }} stroke="#8884d8" />
                <Line type="monotone" dataKey="deaths" dot={{ fill: '#eb0e0e' }} stroke='#eb0e0e' />
                <Line type="monotone" dataKey="recovered" dot={{ fill: '#82ca9d' }} stroke="#82ca9d" />
              </LineChart>
              </div>
            </div>
            <div className="col-lg-12">
              <h4 className="text-center">Daily</h4>
              <div className = "d-flex align-items-center justify-content-center">
                <BarChart width={670} height={350} data={barGraphData} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="" horizontal={true} vertical={false} />
                  <XAxis dataKey="date" />
                  <YAxis label={{ value: "Number of cases", offset: 15, angle: -90, position: "left" }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="new_confirmed" fill="#8884d8" />
                  <Bar dataKey="new_deaths" fill="#eb0e0e" />
                </BarChart> </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default CovidTracker