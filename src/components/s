import React from "react";
import Chart from "chart.js/auto";
import {  pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Pie } from "react-chartjs-2";
import { PieChart } from "@material-ui/icons";
export default function Bhart(){
const  labels=["Open Problems", "Unassigned", "Unacknowledged", "Open Known Errors" ];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: ["green", "yellow", "purple", "red"],
                // Border color of each bar
      borderColor: ["green", "yellow", "purple", "red"],
      data: [ 2, 20, 30, 45],
      
    },
  ],
  
};
const TOTAL =97 //data.map((item) => item.value).reduce((a, b) => a + b, 0);
const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
  };

    
  return (
    <div>
      <Pie series={[
        {
        //   outerRadius: 180,
        //   data,
          
          arcLabel:getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontSize:12,
          fontWeight:"Bold",
          
        },
      }} style={{width:"450px",height:"450px"}}  data={data}  />
    </div>
  );
}
