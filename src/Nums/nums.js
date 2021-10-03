import React from "react";
import '../App.css';
function Nums() {
    const nums=[
        {h:"41",p:"Awards"},
        {h:"129",p:"Projects"},
        {h:"41",p:"Awards"},
        {h:"05",p:"Experiences"}
    ];
    const bg1={background:'url(img/facts_bg.jpg)'},
          bg2={background:'url(img/testimonials_bg.jpg)'};
    const h={
        fontSize: '40px',
        fontWeight: 'bold'
    }
  return (
    <div className="nums" id="nums" style={bg1}>
        <div className="row">
            {nums.map((num,i)=>{
                return(
                    <div className="col col-sm-3 col-6" key={i}>
                        <h2 style={h}>{num.h}</h2>
                        <p>{num.p}</p>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Nums;
