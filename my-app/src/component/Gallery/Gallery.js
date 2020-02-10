import React from 'react';
import Image from "./Image"

export default class Galley extends React.Component{
  constructor( ...args ){
    super( ...args );
    this.state = {
      count: 0
    }
  }

  nextImg = () => {
    let count = this.state.count;
    count += 1;
    if(count === 4){
      count = 0;      
    }
    this.setState({count: count})
  }

  prevImg = () => {
    let count = this.state.count;
    count -= 1;
    if(count < 0){
      count = 3;      
    }    
    this.setState({count: count});  
  } 

  render(){
    return(<>
      <h2 className="col-lg-8 col-md-8 col-12 mb-4 mt-4 text-dark">
        Gallery
      </h2>
      <hr className="mb-4"/>
      <div className="row">
        <div class="offset-lg-2 offset-md-1 offset-1"></div>
        <div className="col-lg-8 col-md-10 col-10">
          <span onClick={this.nextImg} 
            className="position-absolute carousel-control-next-icon next-btn" 
            style={{top:"50%", right: 25, transform: "translate(0, -50%)", cursor: "pointer"}}>
          </span>
          <span 
            onClick={this.prevImg} 
            className="position-absolute carousel-control-prev-icon align-middle prev-btn" 
            style={{top:"50%", left: 25, transform: "translate(0, -50%)", cursor: "pointer"}}>
          </span>
          <Image img={this.state.count}/>
        </div> 
        <div class="offset-lg-2 offset-md-1 offset-1"></div>
      </div>
    </>)
  }
}
