import React from 'react';
import {     
  Link
} from "react-router-dom";
export default class Header extends React.Component{
   
   render(){
    return(
      <section className="bg-dark" style={{maxWidth: "100%"}}>
        <div className="container">
          <div className="row pt-3 pb-2">	           
            <div className="offset-lg-3 offset-md-2"/>
            <h1 className="col-lg-9 col-md-10 col-12 text-light text-center">
              {this.props.title}
            </h1>
          </div>
          <div className="row">
            <div className="offset-lg-3 offset-md-2"/>
            <a href={"https://github.com/ua-enumaelish/SPA"}
              className="col-lg-9 col-md-10 col-12 pb-2 text-light text-center" 
              role="button" 
              aria-pressed="true"
              target="_blank"
            >
              GitHub
            </a>

          </div>
        </div> 
      </section>    
    )
  }
}