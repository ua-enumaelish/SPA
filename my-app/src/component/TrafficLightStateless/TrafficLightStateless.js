import React from 'react'
import TrafficLight from './TrafficLight'

export default class TrafficLightStateless extends React.Component{
  constructor(...args){
    super(...args);    
    this.state = {
      lightArray : [],
      lights: [
        null, null, null       
      ]
    }
  }

  addLight = () => this.setState({
    lightArray: this.state.lightArray.concat({
      id: Math.random(),
      lampState: null,
      count: 0,
      timerID: null
    })
    
  });
  
  removeTrafficLight = index => {
    const { lightArray } = this.state;

    let clone = lightArray.slice(0);
    clone.splice(index, 1);
    this.setState({ lightArray: clone });
  };

  changeColor = index => {
    clearInterval(this.timerId)
    const { lightArray } = this.state;
    let clone = lightArray.slice(0); 

    this.timerId = clone[index].timerID = setInterval(() => {
      if(clone[index].count === 4){
        clone[index].count = 0;
      }
      clone[index].lampState = clone[index].count;   
      this.setState({lights: clone});
      clone[index].count++;
    },1000)
  }


  stopLighting = index => {
    const { lightArray } = this.state;
    let clone = lightArray.slice(0); 
    clearInterval(clone[index].timerID);
  }

  render(){
    const { lightArray } = this.state;
    return <>     
      <h2 className="col-lg-8 col-md-8 col-12 mb-4 mt-4 text-dark">
        Trafficlight stateless
      </h2>   
      <hr className="mb-4"/>    
      <div className="col-9 d-flex flex-wrap justify-content-center">
        <button
          onClick={this.addLight}
          className="position-fixed btn btn-danger" 
          style={{ top: '35%', right: '0', zIndex: '1' }}
        >
          ADD TRAFFIC LIGHT
        </button>        
        { lightArray.map((light, index) => <TrafficLight
          key={light.id}
          { ...light }          
          onRemove={() => this.removeTrafficLight(index)}
          onStart={() => this.changeColor(index)}
          onEnd={() => this.stopLighting(index)}
        />) }
      </div>
    </>;
  }
}