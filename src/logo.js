import React from "react";
import './App.css';
function Logo() {
    var myArr = [1,2,3,4,5];
    console.log(myArr.length);
    const img={ margin: 'auto 20px ',maxWidth: '100%'};
  return (
    <div className="logo" style={{background: '#000',textAlign:"center"}}>
        <div class="row">

           {myArr.map((x,i)=>{
            return(
                <div class="col-md-2 col-sm-4 col-6">
                    <img src={"img/logo-"+x+".png"} style={img}/>
                    {console.log(x)}
                </div>
            )
            })
           }
        </div>
    </div>
  );
}

export default Logo;
