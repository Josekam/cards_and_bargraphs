// import React from 'react';
// import Paper from '@material-ui/core/Paper';
// import { useEffect } from 'react';
// import { Pie } from 'react-chartjs-2';
    
// export default function Charts (){
//     const [openproblems,setopenproblems]=React.useState(0);
//     const[unassigned,setunassigned]=React.useState(0);
//     const[unacknowledged,setunacknowledged]=React.useState(0);
//     const[knownerrors,setknownerrors]=React.useState(0);
//     const [graph, setGraph] = React.useState<any>({
//         labels: [],
//         data: [],
//       });
      
//       const graphData = [
//         {
//           label: 'React',
//           value: 12
//         },
//         {
//           label: 'Vue',
//           value: 19
//         },
//         {
//           label: 'Angular',
//           value: 3
//         }
//       ];
    
//       useEffect(() => {
    
//         const labels: any[] = [];
//         const data: any[] = [];
    
//         graphData?.map((v:any) => {
//           labels.push(v?.label);
//           data.push(v?.value);
//         });
    
//         setGraph({
//           labels: labels,
//           data: data,
//         });
    
//       },[]);
      
//       const data = {
//         labels: graph.labels,
//         datasets: [
//           {
//             label: '# of Votes',
//             data: graph.data,
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)',
//             ],
//             borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1,
//           },
//         ],
//       };
      
    
      
   
//     return(
//         <div>
//         <section>
//         <div className="container">
//         <div style={{ height:'300px',width:'300px',margin:'0 auto' }}>
//           <Pie data={data} />
//         </div>   
//         <div className="cards">
//          <div className="card" style={{background:"blue"}}>
//          <h3>Open Problems</h3>
//          <h1>{openproblems} </h1>
//          </div>
//          <div className="card" style={{background:"pink"}}>
//          <h3>Unassigned Problems</h3>
//          <h1>{unassigned}</h1>
//          </div>
//          <div className="card" style={{background:"green"}}>
//          <h3>Unacknowledged Problems</h3>
//          <h1>{unacknowledged}</h1>
//          </div>
//          <div className="card" style={{background:"brown"}}>
//          <h3>Open Known Errors</h3>
//          <h1>{knownerrors}</h1>
//          </div>
//          </div>
         
//          </div>
//          </section>
//          </div>
         
//     )
// }
// 
// import * as React from 'react';
import * as React from 'react';
import axios from 'axios';
import { DefaultizedPieValueType } from '@mui/x-charts';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { Bar } from "react-chartjs-2";
//import {CategoryScale} from 'chart.js'; 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    
  )
  //import {CategoryScale} from 'chart.js'; 
//Chart.register(CategoryScale);
export default function PieChartWithCustomizedLabel() {
    const [openproblems,setopenproblems]=React.useState(10);
    const[unassigned,setunassigned]=React.useState(40);
    const[unacknowledged,setunacknowledged]=React.useState(10);
    const[knownerrors,setknownerrors]=React.useState(20);
    const fetch_openproblems=(token,Status)=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'!="Closed"&& q=\'Investigation Status\'!="Rejected"',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': token,
          'Cookie': '_cacheId=779857'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
       
       
        
          setopenproblems(response.data["entries"].length)
        
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    const fetch_unassigned=(token,Status)=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Assignee Login ID\'=null',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': token,
          'Cookie': '_cacheId=779857'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
       
        
        
          setunassigned(response.data["entries"].length)
        
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
  
    const fetch_unacknowledged=(token,Status)=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Assigned Support Organization\'=null',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': token,
          'Cookie': '_cacheId=779857'
        }
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
       
       
        
          setunacknowledged(response.data["entries"].length)
        
      })
      .catch((error) => {
        console.log(error);
      });
      
    }
    
     const fetch_token=()=>{
      const qs = require('qs');
  let data = qs.stringify({
    'username': 'ticketportal',
    'password': 'ticketportal' 
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '/api/jwt/login',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    
    fetch_openproblems(response.data)
    fetch_unassigned(response.data,null)
    fetch_unacknowledged(response.data)
   // fetch_assigned(response.data,"Assigned")
  })
  .catch((error) => {
    console.log(error);
  });
  
    }
    React.useEffect(() => {
     
      fetch_token()
        }, []);
    
      const  labels=["Open Problems", "Unassigned", "Unacknowledged", "Open Known Errors" ];
//     const data = [
//         { label: 'Open Problems', value: openproblems, color: 'green' },
//         { label: 'Unassigned', value: unassigned, color: 'yellow' },
//         { label: 'Unacknowledged problems', value: unacknowledged, color: 'purple' },
//         { label: 'Known Errors', value: knownerrors, color: 'red' },
        
//       ];
//      // labels: ['January', 'February', 'March', 'April'],
//     const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
//     const sizing = {
//         margin: { left: 0},
//         width: 400,
//         height: 400,
//         legend: { hidden: false},
//       };
// const getArcLabel = (params: DefaultizedPieValueType) => {
//   const percent = params.value / TOTAL;
//   return `${(percent * 100).toFixed(0)}%`;
// };
  return (
    <div className="data">
       
     {/* <PieChart
       data={{
        // Name of the variables on x-axies for each bar
        labels:["Open Problems", "Unassigned", "Unacknowledged", "Open Known Errors" ],
        }}
      series={[
        {
          outerRadius: 180,
          data,
          labels: labels,
          arcLabel:getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontSize:14,
          fontWeight:"Bold",
          
        },
      }}
      {...sizing}
      
       /> 
    */}
    <div style={{ maxWidth: "1000px",marginRight:500,fontSize:"30px",fill:"black"}}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels:["Open Problems", "Unassigned", "Unacknowledged", "Open Known Errors" ],
          //  labels: labels,
            datasets: [
              {
                // Label for bars
                
                label: "total count/value ",
               
                // Data or value of your each variable
                data:[openproblems, unassigned, unacknowledged, knownerrors],
                // Color of each bar
                backgroundColor: ["green", "yellow", "purple", "red"],
                // Border color of each bar
                borderColor: ["green", "yellow", "purple", "red"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          width={500}
          fontWeight="40px"
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 45,
                Color:"red",
              },
            },
          }}
        />
      </div>
    {/* //<h1>openproblems {openproblems}</h1>
    //<h1>unassigned{unassigned}</h1>
    //<h1>unacknowledged{unacknowledged}</h1> */}
    </div>
  );
}
