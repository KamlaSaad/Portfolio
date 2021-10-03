import React,{ Component } from "react";
import "./nav.css";
import "../App.css"

class Nav extends Component{
    state={
        height:"0",
        show:false
    };
    menu=(e)=>{
        e.preventDefault();
        let show=this.state.show;
        this.setState({show:!show,height:show?"0":"350px"})

    }
    render(){
        return(
            <div>
                <nav>
                    <h2>Marek</h2>
                    <span class="links">
                        <a href="index.html">Home</a>
                        <a href="#">About Me</a>
                        <a href="#">Portifolio</a>
                        <a href="#">Services</a>
                        <a href="#">Client</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </span>
                    <button id="menu" onClick={this.menu}>
                        <i class="fa fa-align-justify" aria-hidden="true"></i>
                    </button>
                </nav>
                <div id="dropdowan" style={{height:this.state.height}}>
                    <a href="index.html">Home</a><hr/>
                    <a href="#">About Me</a><hr/>
                    <a href="#">Portifolio</a><hr/>
                    <a href="#">Services</a><hr/>
                    <a href="#">Client</a><hr/>
                    <a href="#">Blog</a><hr/>
                    <a href="#">Contact</a>
                </div>
            </div>
        )
    }
}
export default Nav;