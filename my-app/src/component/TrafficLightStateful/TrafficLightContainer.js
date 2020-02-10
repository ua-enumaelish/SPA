import React from "react";
import "./style.css";
import TrafficLight from "./TrafficLight";


export default class TrafficLightContainer extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {
      lightArray : []
    };
  }

  addLight = () => this.setState({
    lightArray: this.state.lightArray.concat({ key: Math.random() })
  });

  removeTrafficLight = index => {
    const { lightArray } = this.state;

    let clone = lightArray.slice(0);
    clone.splice(index, 1);
    this.setState({ lightArray: clone });
  };
 
  render(){
    const { lightArray } = this.state;
    
    return <> 
      <h2 className="col-lg-8 col-md-8 col-12 mb-4 mt-4 text-dark">
        Trafficlight statefull
      </h2>
      <hr className="mb-4"/>       
      <div className="col-9 d-flex flex-wrap justify-content-center">
        <button
          onClick={this.addLight}
          className="position-fixed btn btn-danger" 
          style={{ top: '35%', right: '0', zIndex: '1', padding: "8px" }}
        >
          ADD TRAFFIC LIGHT
        </button>        
        { lightArray.map((light, index) => <TrafficLight
          key={light.key}
          onRemove={() => this.removeTrafficLight(index)}
        />) }
      </div>
      </>;
  }
}