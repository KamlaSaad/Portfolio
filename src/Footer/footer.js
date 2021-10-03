import React from "react";
import '../App.css';
import './footer.css';
function Footer() {
    const icons=["facebook","twitter","google-plus","fa-dribbble"]
  return (
    <footer>
        <div>
            {icons.map(icon=>{
                return(<a href="#"><i class={"fa fa-"+icon}></i></a>)
            })}
        </div>
        <p>&copy; 2018 radekthemes. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
