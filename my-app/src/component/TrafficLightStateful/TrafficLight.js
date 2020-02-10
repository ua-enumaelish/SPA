import React from 'react'


class TraffickLight extends React.Component{
  constructor(...arg){
    super(...arg) 
    this.count = 0   
    this.state = {lights: [null, null, null]}
  }

  getLight(item, index){   
    switch(item){ 
      default: return <div key={index} className={`w-75 mb-3 rounded-circle bg-secondary`} style={{height: '100px'}}></div>;
      case 0: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-danger`} style={{height: '100px'}}></div>; 
      case 1: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-warning`} style={{height: '100px'}}></div>;
      case 2: return <div key={index}  className={`w-75 mb-3 rounded-circle bg-success`} style={{height: '100px'}}></div>;
    }
  }

  
  startLighting = () =>{    
    clearInterval(this.timerId)
    let lighting = [
      { lights: [0, null, null]}, 
      { lights: [null, 1, null]},
      { lights: [null, null, 2]},
      { lights: [null, 1, null]}
    ]

    this.timerId = setInterval(() => {
      if(this.count === 4){
        this.count = 0
      }
      this.setState(lighting[this.count])
      this.count++
    },1000)
  } 

  clearInt = () => {
    clearInterval(this.timerId)
  }

  render(){
    const { onRemove } = this.props;
    return(      
      <div className="traffic-container pb-3 pt-3 mr-1 mb-1 mt-5 bg-dark d-flex flex-column justify-content-center align-items-center rounded"
           style={{minWidth: 150}}>
        {this.state.lights.map((item, index) => this.getLight(item, index))} 
        <button 
          onClick={this.startLighting}
          className="traffic-btn start-btn text-light bg-dark"
        >
          start
        </button>         
        <button 
          onClick={this.clearInt}
          className="traffic-btn stop-btn text-light bg-dark"
        >
          stop
        </button>   
        <button 
          onClick={onRemove}
          className="traffic-btn remove-btn text-dark"
        >
          remove
        </button>                  
      </div>           
    )
  }
}


export default TraffickLight