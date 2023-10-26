import React from 'react';
import axios from 'axios';
import { SyncProblem } from '@material-ui/icons';


 export default function Responsive(){
  const [openproblems,setopenproblems]=React.useState(0)
    const [myticket,setmytickets]=React.useState(18);
    const [draft,setdraft]=React.useState(0);
    const [review,setreview]=React.useState(13);
    const[Authorization,setauthorization]=React.useState(0);
    const[assigned,setassigned]=React.useState(14);
      const[investigation,setinvestigation]=React.useState(0);
    const[pending,setpending]=React.useState(0);
    const[completed,setcompleted]=React.useState(0);
    const[rejected,setrejected]=React.useState(0);
    const[closed,setclosed]=React.useState(1628);
    const[cancelled,setcancelled]=React.useState(0);
    const[clear,setclear]=React.useState(0)
    const[unassigned,setunassigned]=React.useState(0);
    const[unacknowledged,setunacknowledged]=React.useState(0);
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
            <section>
        <div className="container">
        <div className="cards">
             <div className="card" style={{background:"blue"}}>
             <h3>Open Problems</h3>
             <h1>{openproblems} </h1>
             </div>
             <div className="card" style={{background:"pink"}}>
             <h3>Unassigned Problems</h3>
             <h1>{unassigned}</h1>
             </div>
             <div className="card" style={{background:"green"}}>
             <h3>Unacknowledged Problems</h3>
             <h1>{unacknowledged}</h1>
             </div>
             <div className="card" style={{background:"orange"}}>
             <h3>Open Known Errors</h3>
             <h1>2 </h1>
             </div>
             <div className="card" style={{background:"red"}}>
             <h3>My tickets</h3>
             <h1>{myticket}</h1>
             
             </div>
             <div className="card" style={{background:"purple"}}>
             <h5>Draft</h5>
             <h1>{draft}</h1>
             </div>
             <div className="card" style={{background:"brown"}}>
             <h5>Under Review</h5>
             <h1>{review}</h1>
             </div>
             <div className="card" style={{background:"pink"}}>
             <h5>Assigned</h5>
             <h1>{assigned}</h1>
             </div>
             <div className="card" style={{background:"orange"}}>
             <h5>Request for Authorization</h5>
             <h1>{Authorization}</h1>
             </div>
             <div className="card" style={{background:"grey"}}>
             <h5>Under Investigation</h5>
             <h1>{investigation}</h1>
             </div>
             <div className="card" style={{background:"blue"}}>
             <h5>Pending</h5>
             <h1>{pending}</h1>
             </div>
             <div className="card" style={{background:"brown"}}>
             <h5>Completed</h5>
             <h1>{completed}</h1>
             </div>
             <div className="card" style={{background:"yellow"}}>
             <h5>Rejected</h5>
             <h1>{rejected}</h1>
             </div>
             <div className="card" style={{background:"orange"}}>
             <h5>Closed</h5>
             <h1>{closed}</h1>
             </div>
             <div className="card" style={{background:"red"}}>
             <h5>Cancelled</h5>
             <h1>{cancelled}</h1>
             </div>
             <div className="card" style={{background:"violet"}}>
             <h5>Clear()</h5>
             <h1>{clear}</h1>
             </div>
        </div>
        </div>
        </section>
        </div>
    );
}