import React from "react";
import animateData from './animateData';
import "./animate.css";

export default class Animate extends React.Component{
  constructor(...args){
    super(...args);
    this.state = {
      mainValue: "bounce",
      additionalValue: "In",
      id: 0,
      animate: null
    }
  }

  getMainOtions = (item, index)  => {
    return <>
        
      <optgroup
        label = { item.optgroup }
        key = { Math.random() }
      >
      </optgroup>
      <option
        value = { item.option }
        key = { Math.random() }
        onClick = { event => this.changeState(
          {id: index }          
          ) 
        }
      >
        { item.option }
      </option>
    </>
  }

  changeState = prop => {
    let clone = { 
      ...this.state,
      ...prop
    }
    console.log(clone)
      this.setState({ ...clone })
  }

  createOptions = option => {
    console.log(option);
    let options;
    for( let key in option){
      options = 
        <option
          key={key}
          value = {key}
        >
          {key}
        </option>
    }
    return options;
  }

  addClassName = () => {
    let getAnimate = "animated " + this.state.mainValue + this.state.additionalValue;
    this.changeState( { animate: getAnimate} );
    this.removeClassName();  
  }

  removeClassName = () => {
    setTimeout( () => this.changeState( { animate: null} ), 3000);  
  }

  render(){
    return(
      <>
        <h2 className="col-lg-8 col-md-8 col-12 mb-4 mt-4 text-dark">
          Animate CSS
        </h2> 
        <hr className="mb-4"/> 
        <div className="row">
          <div className="offset-2"></div>
          <div className="col-8 text-center d-flex flex-column align-items-center">
          
            <h2
              className = {this.state.animate}
            >
              Hello
            </h2>

            {/* MAIN SELECT */}
            <div
              className = "mt-3 selectContainer"
            >
              <select 
                className = "mainSelect selects"
                value = {this.state.mainValue}
                onChange = { event => this.changeState( { mainValue: event.target.value } ) }
              >
                { animateData.map( ( item, index ) => this.getMainOtions( item, index )) }
              </select>

              {/* ADDITIONAL SELECT */}
              <select
                className = "additionalSelect selects"
                value = {this.state.additionalValue}
                onChange = { event => this.changeState( { additionalValue: event.target.value } ) }
              >
                { animateData[this.state.id].options.map( option => this.createOptions(option)) }
              </select>
            </div>
              <button
                className = "btn mt-3"
                style={{maxWidth: "100px"}}
                onClick = { this.addClassName }
              >
                Click
              </button>
            
          </div> 
        </div> 
      </>
    )
  }
}


           
      