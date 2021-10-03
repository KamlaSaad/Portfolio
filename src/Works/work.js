import React, { Component } from "react";
import '../App.css';
import './work.css';
class Work extends Component {
    state={

        works:[
            {classN:"prand",img:"img/w-2.jpg",cover:"Text"},
            {classN:"design",img:"img/w-4.jpg",cover:"Chair"},
            {classN:"design prand",img:"img/w-5.jpg",cover:"Clothes"},
            {classN:"design",img:"img/w-6.jpg",cover:"Jessica"},
            {classN:"photo",img:"img/w-7.jpg",cover:"Abstract"},
            {classN:"photo",img:"img/w-8.jpg",cover:"Building"},
            {classN:"prand",img:"img/w-9.jpg",cover:"Cactus"},
            {classN:"photo",img:"img/w-10.jpg",cover:"Chair"}
        ]
    }
    click=(e)=>{
        e.preventDefault();
        let links=document.getElementsByClassName("link");
        for(var i=0;i<links.length;i++){
            links[i].classList.remove("active")
        }
        e.target.className+=" active";
        let allImgs=document.getElementsByClassName("all"),
        imgs=document.getElementsByClassName(e.target.name);
        for(var i=0;i<imgs.length;i++){
            allImgs[i].style.display="none";
        }
        for(var j=0;j<imgs.length;j++){
            imgs[j].style.display="inline-block";
        }
    }
  render(){
    return (
        <div className="work">
            <h2>My Works</h2>
            <div class="works">
                <a href="#" className="link" name="all" onClick={this.click}>all</a>
                <a href="#" className="link" name="design" onClick={this.click}>webdesign</a>
                <a href="#" className="link" name="prand" onClick={this.click}>pranding</a>
                <a href="#" className="link" name="photo" onClick={this.click}>photography</a>
            </div>
            <div class="row">
               {this.state.works.map((work,index)=>{
                   return(
                    <div class={"col col-md-4 col-sm-6 col-12 all "+work.classN}>
                        <div class="my-img">
                            <img src={work.img} class="w-img"/>
                            <div class="cover">{work.cover}</div>
                        </div>
                    </div>
                   )
               })}
                
            </div>
        </div>
      );
  }
}

export default Work;
