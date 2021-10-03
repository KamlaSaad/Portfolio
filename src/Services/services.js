import React from "react";
import '../App.css';
function Services() {
    const data=[
        {i:"fa-laptop",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
        {i:"fa-gears",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
        {i:"fa-camera",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
        {i:"fa-phone",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
        {i:"fa-line-chart",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
        {i:"fa-bullhorn",h:"web design",p:"Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare."},
       ];
   
  return (
    <div className="services" style={{textAlign: 'center'}}>
        <h2>Services</h2>
        <p>Cras ullamcorper fringilla ante, ac dictum massa</p><br/><br/><br/>
        <div class="row">
            {data.map((item,index)=>{
                return(
                    <div class="col col-lg-4 col-md-6 col-12" key={index} style={{marginBottom: '20px'}}>
                    <i class={"fa "+item.i}  style={{fontSize: '40px'}}></i>
                    <h5>{item.h}</h5>
                    <p>{item.p}</p>
                </div>
                )
            })}
            
        </div>
    </div>
  );
}

export default Services;
