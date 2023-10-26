
import React from "react";
import Chart from "react-apexcharts";
import { Bar } from "react-chartjs-2";
import axios from 'axios';
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

export default function Donutchart(){
  const [openproblems,setopenproblems]=React.useState(10);
  const[unassigned,setunassigned]=React.useState(40);
  const[unacknowledged,setunacknowledged]=React.useState(10);
  const[knownerrors,setknownerrors]=React.useState(20);
  const [myticket,setmytickets]=React.useState(18);
    const [draft,setdraft]=React.useState(78);
    const [review,setreview]=React.useState(13);
    const[Authorization,setauthorization]=React.useState(0);
    const[assigned,setassigned]=React.useState(14);
    const[pending,setpending]=React.useState(0);
    const[completed,setcompleted]=React.useState(10);
    const[closed,setclosed]=React.useState(1628);
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
  const fetch_Assignee_Problem=(token)=>{

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Assignee Login ID\'="jsigei"',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': token, 
        'Cookie': '_cacheId=779857'
      }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data["entries"].length);
      //
      setmytickets(response.data["entries"].length)

    })
    .catch((error) => {
      console.log(error);
    });
    
  
}
const fetch_status_Problem=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    if(Status==="Draft")
    {
      setdraft(response.data["entries"].length)
    }
    // if(Status==="Under Review")
    // {
    //   setreview(response.data["entries"].length)
    // }
  })
  .catch((error) => {
    console.log(error);
  });
  
}
const fetch_status_review=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Under Review")
    {
      setreview(response.data["entries"].length)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}
const fetch_status_authorization=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Request For Authorization")
    {
      setauthorization(response.data["entries"].length)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}

const fetch_status_assigned=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Assigned")
    {
      setassigned(response.data["entries"].length)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}
const fetch_status_pending=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Pending")
    {
      setpending(response.data["entries"].length)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}
const fetch_status_completed=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Completed")
    {
      setcompleted(response.data["entries"].length)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}
const fetch_status_closed=(token,Status)=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: '/api/arsys/v1/entry/PBM:ProblemInterface?q=\'Investigation Status\'="' + Status + '"',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': token,
      'Cookie': '_cacheId=779857'
    }
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
   
    if(Status==="Closed")
    {
      setclosed(response.data["entries"].length)
    }
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
  fetch_Assignee_Problem(response.data)
  fetch_status_Problem(response.data,"Draft")
  fetch_status_review(response.data,"Under Review")
  fetch_status_authorization(response.data,"Request For Authorization")
  fetch_status_assigned(response.data,"Assigned")
  fetch_status_pending(response.data,"Pending")
  fetch_status_completed(response.data,"Completed")
  fetch_status_closed(response.data,"Closed")
 // fetch_assigned(response.data,"Assigned")
})
.catch((error) => {
  console.log(error);
});

  }
  React.useEffect(() => {
   
    fetch_token()
      }, []);
  
  const options={
    series: [2,4,8,5],
    labels:["Open Problems", "Unassigned", "Unacknowledged", "Open Known Errors" ],
   
 // backgroundColor: ["#eee000", "yellow", "purple", "brown"],
    // Border color of each bar
  borderColor: ["green", "yellow", "purple", "red"],
    plotOptions:{
      pie:{
        expandOnClick:false,
        donut:{
          size:"55px",
          labels:{
            show:true,
            verticalAlign: 'top',
            marginLeft:"5px",
            display:"Top",
            position:"Left",
            fontSize:"35px",
            total:{
              show:true,
            showAlways:true,
            fontSize:"35px",
            color:"blue",
           
            }

          }
        }
      }
    }
  }
  const series=[openproblems,unassigned,unacknowledged,knownerrors];
  return (
    <div>
      <h2>Problem Management Dashboard</h2>
    <div className="data">
    <div 
     style={{height: '${window.innerHeight}',verticalAlign: 'top',color:"black",marginTop:"20px"}} >

  <Chart options={options} series={series} type="donut" width="600px" height={600}/>
  </div>
  <div style={{ maxWidth: "1000px",fontSize:"30px",fill:"black",marginRight:"160px",marginLeft:"0px"}}>
    
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels:["Draft", "Completed", "Unacknowledged", "Open Known Errors" ],
            datalabels:["Draft", "Completed", "Unacknowledged", "Open Known Errors" ],
          //  labels: labels,
            datasets: [
              {
                // Label for bars
                //indexAxis: 'y',
                label: "total count/value ",
                
               
                // Data or value of your each variable
                data:[draft,completed,unacknowledged,knownerrors],
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
            responsive:true,
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
            // legend: {
            //   display:true,
            //   labels: {
            //     fontSize: 45,
            //     Color:"red",
            //   },
            // },
          //   plugins: {
          //     legend: {
          //        display: true,
          //        position: 'bottom',
          //        align: 'center',
          //        datalabels: {
          //           color: 'darkred',
          //           font: {
          //              weight: 'bold',
          //              fontWight:"90px"
          //           },
          //        }
          //     }
          //  }
        //   plugins: {
        //     datalabels: {
        //         anchor: 'end',
        //         align: 'center',
                
        //         font: {
        //             weight: 'bold'
        //         }
        //     }
        // }
           
          }}
        />
      </div>
      
  </div>
   
    
<div className="container">
<div className="cards">
<div className="card" style={{background:"red"}}>
             <h3>My tickets</h3>
             <h1>{myticket}</h1>
             
             </div>
             <div className="card" style={{background:"purple"}}>
             <h5>Closed</h5>
             <h1>{closed}</h1>
             </div>
             <div className="card" style={{background:"brown"}}>
             <h5>Under Review</h5>
             <h1>{review}</h1>
             </div>
             <div className="card" style={{background:"pink"}}>
             <h5>Assigned</h5>
             <h1>{assigned}</h1>
             </div>
     </div>
    
    
     </div>
     </div>
    )
}