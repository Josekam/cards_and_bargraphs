import React from 'react';
import axios from 'axios';
import Chart from "react-apexcharts";
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
import { SyncProblem } from '@material-ui/icons';


 export default function Responsive(){
  const [openproblems,setopenproblems]=React.useState(40)
    const [myticket,setmytickets]=React.useState(18);
    const [draft,setdraft]=React.useState(20);
    const [review,setreview]=React.useState(13);
    const[Authorization,setauthorization]=React.useState(0);
    const[assigned,setassigned]=React.useState(14);
      const[investigation,setinvestigation]=React.useState(0);
    const[pending,setpending]=React.useState(0);
    const[completed,setcompleted]=React.useState(25);
    const[rejected,setrejected]=React.useState(0);
    const[closed,setclosed]=React.useState(1628);
    const[cancelled,setcancelled]=React.useState(45);
    const[clear,setclear]=React.useState(0)
    const[unassigned,setunassigned]=React.useState(0);
    const[unacknowledged,setunacknowledged]=React.useState(60);
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
  const fetch_status_investigation=(token,Status)=>{
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
     
      if(Status==="Under Investigation")
      {
        setinvestigation(response.data["entries"].length)
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
  const fetch_status_rejected=(token,Status)=>{
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
     
      if(Status==="Rejected")
      {
        setrejected(response.data["entries"].length)
      }
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
   const fetch_status_cancelled=(token,Status)=>{
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
     
      if(Status==="Cancelled")
      {
        setcancelled(response.data["entries"].length)
      }
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
  const fetch_status_clear=(token,Status)=>{
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
     
      if(Status==="(Clear)")
      {
        setclear(response.data["entries"].length)
      }
    })
    .catch((error) => {
      console.log(error);
    });
    

  }
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
  fetch_Assignee_Problem(response.data)
  fetch_status_Problem(response.data,"Draft")
  fetch_status_review(response.data,"Under Review")
  fetch_status_authorization(response.data,"Request For Authorization")
  fetch_status_assigned(response.data,"Assigned")
  fetch_status_investigation(response.data,"Under Investigation")
  fetch_status_pending(response.data,"Pending")
  fetch_status_completed(response.data,"Completed")
  fetch_status_rejected(response.data,"Rejected")
  fetch_status_closed(response.data,"Closed")
  fetch_status_cancelled(response.data,"Cancelled")
  fetch_status_clear(response.data,"(Clear)")
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
  
    
  
    return(
        
        <div>
            <h2>Problem Management Dashboard</h2>
            <section>
        <div className="container">
        
        <div className="cards">
             <div className="card" style={{background:"white"}}>
             <h3>Open Problems</h3>
             <h1>{openproblems} </h1>
             </div>
             <div className="card" style={{background:"white"}}>
             <h3>Unassigned Problems</h3>
             <h1>{unassigned}</h1>
             </div>
             {/* <div className="card" style={{background:"green"}}>
             <h3>Unacknowledged Problems</h3>
             <h1>{unacknowledged}</h1>
             </div> */}
             {/* <div className="card" style={{background:"orange"}}>
             <h3>Open Known Errors</h3>
             <h1>2 </h1>
             </div> */}
             <div className="card" style={{background:"white"}}>
             <h3>My tickets</h3>
             <h1>{myticket}</h1>
             
             </div>
             <div className="card" style={{background:"white"}}>
             <h5>Draft</h5>
             <h1>{draft}</h1>
             </div>
             {/* <div className="card" style={{background:"brown"}}>
             <h5>Under Review</h5>
             <h1>{review}</h1>
             </div> */}
             <div className="card" style={{background:"white"}}>
             <h5>Assigned</h5>
             <h1>{assigned}</h1>
             </div>
             {/* <div className="card" style={{background:"orange"}}>
             <h5>Request for Authorization</h5>
             <h1>{Authorization}</h1>
             </div> */}
             {/* <div className="card" style={{background:"grey"}}>
             <h5>Under Investigation</h5>
             <h1>{investigation}</h1>
             </div> */}
             {/* <div className="card" style={{background:"blue"}}>
             <h5>Pending</h5>
             <h1>{pending}</h1>
             </div> */}
             <div className="card" style={{background:"white"}}>
             <h5>Completed</h5>
             <h1>{completed}</h1>
             </div>
             {/* <div className="card" style={{background:"yellow"}}>
             <h5>Rejected</h5>
             <h1>{rejected}</h1>
             </div> */}
             <div className="card" style={{background:"white"}}>
             <h5>Closed</h5>
             <div className="closed">
             <h1>{closed}</h1>
             </div>
             </div>
             <div className="card" style={{background:"white"}}>
             <h5>Cancelled</h5>
             <h1>{cancelled}</h1>
             </div>
             {/* <div className="card" style={{background:"violet"}}>
             <h5>Clear()</h5>
             <h1>{clear}</h1>
             </div> */}
        </div>
        
        </div>
        <div className="chart" style={{marginLeft:"0"}}>
       
    <div className='bar'>
    <Bar
      data={{
        // Name of the variables on x-axies for each bar
        
       label:"count",
       labels :["Group1", "Group2", "Group3", "Group4" ,"Group5","Group6","Group7","Group8","Group9","Group10"],
      
        datalabels:["Draft", "Completed", "Unacknowledged", "Open Known Errors" ],
      //  labels: labels,
        datasets: [
          {
            // Label for bars
          //  indexAxis: 'x',
            
            
           label:"count",
            // Data or value of your each variable
            data:[10,20,30,40,50,60,70,80,90,100],
            // Color of each bar
            backgroundColor: ["green", "yellow", "purple", "red"],
            // Border color of each bar
            borderColor: ["green", "yellow", "purple", "red"],
            borderWidth: 0.2,
          },
        ],
      }}
      // Height of graph
      height={200}
      width={400}
      fontWeight="40px"
      options={{
        indexAxis: 'y',
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Groups',
              color:'blue',
              font: {
                weight: 'bold'
             },
            }
          },
          x: {
            title: {
              display: true,
              text: 'Count',
              color:'blue',
              font: {
                weight: 'bold'
             },
            
            }
          }
          
        },

  
    plugins: {
      
      title: {
        display: true,
              text: 'Top 10 Support Groups with no of problems',
               color: 'black',
               position: 'top',
               align: 'center',
               font: {
                  weight: 'bold'
               },
      },
      legend: {
        display: true,
      },
    
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          }
        }
      
    },
  
     
       
      }}
    />
    </div>
    <div className="bar">
    <Bar
      data={{
        // Name of the variables on x-axies for each bar
       // labels:["Draft", "Completed", "Unacknowledged", "Open Known Errors" ],
       labels:["Service1", "Service2", "Service3", "Service4" ,"Service5","Service6","Service7","Service8","Service9","Service10"],
        datalabels:["Draft", "Completed", "Unacknowledged", "Open Known Errors" ],
      //  labels: labels,
        datasets: [
          {
            // Label for bars
            label:"count",
            indexAxis: 'y',
           
            
           
            // Data or value of your each variable
            data:[10,12,14,16,18,22,24,56,22,10],
            // Color of each bar
            backgroundColor: ["green", "yellow", "purple", "red"],
            // Border color of each bar
            borderColor: ["green", "yellow", "purple", "red"],
            borderWidth: 0.5,
          },
        ],
      }}
      // Height of graph
      height={200}
      width={500}
      fontWeight="40px"
      options={{
        indexAxis:'y',
        responsive:true,
        maintainAspectRatio: false,
        scales: {
          y: {
            title: {
              display: true,
              text: 'Services',
              color:'blue',
              font: {
                weight: 'bold'
             },
            }
          },
          x: {
            title: {
              display: true,
              text: 'Count',
              color:'blue',
              font: {
                weight: 'bold'
             },
            
            }
          }
          
        },
        plugins: {
          title: {
            display: true,
            display: true,
                   text: 'Top 10 Services Groups with Most no of problems',
                   color: 'black',
                   position: 'top',
                   align: 'center',
                   font: {
                      weight: 'bold'
                   },
          },
          legend: {
            display: true,
          },
          datalabels: {
            color: 'blue',
            anchor: 'end',
            align: 'right',
            labels: {
              title: {
                font: {
                  weight: 'bold'
                }
              }
            }
          }
        },
    
       
      }}
    />
    
    </div>
  
  
        </div>
        </section>
        </div>
    );
}