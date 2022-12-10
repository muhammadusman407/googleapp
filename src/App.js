
import React from "react";

import logo from './google.png'
class mainclass extends React.Component{

  render(){
    return (
      <div >

<img src={logo} alt="" style={{marginLeft:"41%",marginTop:"4%"}} ></img>
<div >
<input  style={{fontSize:"16px",
 
                outline:"none",
                display:"flex",
                flex:"100%",
                width:"37%",
                borderRadius:"20px",
                height:"38px",
                marginLeft:"31%",
                marginTop:"1.5%",
                
                fontFamily:"arial,sans-serif"
                }}
                 type="text"  >


                 </input>

</div>
<div style={{paddingTop:"1%"}}>
<button style={{border:"1px solid #f8f9fa",
                padding:"0 16px",
                lineHeight:"27px",
                height:"36px",
                borderRadius:"4px",
                
                marginTop:"1%",
                marginLeft:"42%",
                backgroundColor:"#f8f9fa",
                cursor:"pointer"
                } } >Google Search</button>
<button style={{border:"1px solid #f8f9fa",
                padding:"0 16px",
                lineHeight:"27px",
                height:"36px",
                borderRadius:"4px",
               
                marginLeft:"1%",
                backgroundColor:"#f8f9fa",
                cursor:"pointer"
                }}>I m Feeling Lucky</button>
</div>

      </div>
      
    )
  }
}

export default mainclass;