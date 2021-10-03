import React from "react";
import '../App.css';
import './news.css';
function News() {
    const news=[
        {span:"By John Done July 04 2018",p:"Mauris leo erat tincidunt at augue sit amet"},
        {span:"By John Done July 04 2018",p:"Mauris leo erat tincidunt at augue sit amet"},
        {span:"By John Done July 04 2018",p:"Mauris leo erat tincidunt at augue sit amet"},
       
    ];
  
  return (
    <div class="news">
        <h2>Latest news</h2>
        <p>Mauris leo erat tincidunt at augue sit amet</p><br/><br/><br/>
        <div class="row">
            {news.map((item,index)=>{
               return(
                <div class="col col-md-4 col-12" key={index}>
                    <div class="box">
                        <img src={"img/blog"+(index+1)+".jpg"}/><br/>
                        <span>{item.span}</span><br/>
                        <p>{item.p}</p>
                        {console.log("img/blog"+index+".jpg")}
                    </div>
                </div>
               )
           })}
           <button>read more</button>
        </div>
    </div>
  );
}

export default News;
