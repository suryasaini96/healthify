import React, {useState, useEffect} from "react";
import axios from 'axios';
import { LineChart, BarChart, Bar, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function CovidTrackerComponent() {
    const [data, setData] = useState({
      population: 0, 
      latest_data: {
        deaths: 0,
        confirmed: 0,
        recovered: 0
      }
    });
    const [lineGraphData, setLineGraphData] = useState({});
    const [barGraphData, setBarGraphData] = useState({});

    useEffect(()=>{getData()}, []);
    const getData = async () => {
      try {
        const resp = await axios.get('http://localhost:8080/covid-api/in');
        const timeline_data = resp.data.timeline.reverse().filter(data=> data.recovered!==0);
        const recent_data = resp.data.timeline.reverse().slice(0,7).reverse();
        setData(resp.data);
        setLineGraphData(timeline_data);
        setBarGraphData(recent_data);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h4>Population: {data.population.toLocaleString()}</h4>
          </div>
          <div class="col-md-3">
            <h4>Cases: {data.latest_data.confirmed.toLocaleString()}</h4>
          </div>
          <div class="col-md-3">
            <h4>Deaths: {data.latest_data.deaths.toLocaleString()}</h4>
          </div>
          <div class="col-md-3">
            <h4>Recovered: {data.latest_data.recovered.toLocaleString()}</h4>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 class="text-center">Cumulative</h4>
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
          <div class="col-md-6">
            <h4 class="text-center">Daily</h4>
            <BarChart width={730} height={350} data={barGraphData} margin={{ top: 15, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="" horizontal={true} vertical={false} />
              <XAxis dataKey="date" />
              <YAxis >
                <Label value="Number of cases" offset={30} angle={-90} position="left" />
              </YAxis>
              <Tooltip />
              <Legend />
              <Bar dataKey="new_confirmed" fill="#8884d8" />
              <Bar dataKey="new_deaths" fill="#eb0e0e" />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
}
