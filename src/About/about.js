import React from "react";
import './about.css';
import '../App.css';
function About() {
  return (
    <div className="about">
    <span className="row">
        <div className="col col-md-6 col-12">
            <img src="img/about.jpg"/>
        </div>
        <div className="col col-md-6 col-12">
            <h4>hello!</h4>
            <h2>I'm Marek Doe</h2>
            <p>Vestibulum aliquet est quis commodo auctor. Aliquam vel dolor ut metus mattis mattis. Nunc iaculis malesuada tellus. Nulla ac libero ornare, vestibulum lacus quis blandit enimdicta sunt libero ornare.</p>
            <label>Name:</label>
            <span>Marek Doe</span><br/>
            <label>Skype:</label>
            <span>example1234</span><br/>
            <label>Email:</label>
            <span>example@example.com</span><br/>
            <button>dowanload cv</button>
        </div>
        </span>
    </div>
  );
}

export default About;
