import React, {useState, useEffect} from "react";
import axios from 'axios';
import { LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function Test() {
    const [chartData, setChartData] = useState({});
    useEffect(()=>{chart()}, []);
    const chart = () => {
        axios.get('http://localhost:8080/covid-api/in')
        .then(resp => {
            const daily_data = resp.data.timeline.reverse().filter(data=> data.recovered!=0);
            setChartData(daily_data);
        }).catch(err=>console.log(err));
    }
  return (
    <LineChart
      width={800}
      height={400}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 50,
        bottom: 20
      }}
    >
      <CartesianGrid strokeDasharray="0" horizontal={true} vertical={false} />
      <XAxis dataKey="date" angle={-25}/>
      <YAxis>
        <Label value="Number of cases" offset={30} angle={-90} position="left" />
      </YAxis>
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 5 }} />
      <Line type="monotone" dataKey="deaths" stroke="red" />
      <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
    </LineChart>
  );
}
