import React from 'react';
import './clock.css';

export default class Clock extends React.Component{
  constructor( ...args ){
   super( ...args );
   this.step = - 60;
    this.state = {   
      date : new Date(),
      secondHandDirection : 'rotate('+ ( ( ( 360 / 60 ) * new Date().getSeconds() ) ) +'deg)',
      minuteHandDirection : 'rotate('+ ( ( ( 360 / 60 ) * new Date().getMinutes() ) ) +'deg)',
      hourHandDirection : 'rotate('+ ( ( ( 360 / 12 ) * new Date().getHours() ) ) +'deg)'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.getTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getTime = () => {
    this.changeState( {
      secondHandDirection : 'rotate('+ ( ( ( 360 / 60 ) * new Date().getSeconds() ) ) +'deg)',
      minuteHandDirection : 'rotate('+ ( ( ( 360 / 60 ) * new Date().getMinutes() ) ) +'deg)',
      hourHandDirection : 'rotate('+ ( ( ( 360 / 12 ) * new Date().getHours() ) ) +'deg)'
    } )
  }

  changeState = ( prop ) => {
    let clone = {
      ...this.state,
      ...prop
    };

    this.setState( { ...clone } );
  }

  
  getClockFace = ( number, index ) =>{
    let radius = 300 / 2;    
    let angle = this.step * ( Math.PI/180 );
    let cos = Math.cos( angle );
    let sin = Math.sin( angle );
    let numberDiraction = {
      left: radius + ( radius - 30 ) * cos + 'px',
      top: radius + ( radius - 30 ) * sin + 'px',
    }
    this.step += (360 / 12);
    return <span className='numbers' key={ index } style={ numberDiraction }>{ number }</span>
  }

  render() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    return(<>
      <h2 className="col-lg-8 col-md-8 col-12 mb-4 mt-4 text-dark">
        Clock
      </h2>
      <hr className="mb-4"/>
      <div className="clock" style={ { margin: '0 auto' } }>  
      { array.map( ( number, index ) => this.getClockFace( number, index ) ) }
        <span  className='centerStyle'>
          <span className='secondHand' style={ { transform: this.state.secondHandDirection } }></span>
          <span className='minuteHand' style={ { transform: this.state.minuteHandDirection } }></span>
          <span className='hourHand' style={ { transform: this.state.hourHandDirection } }></span>
        </span>
      </div>
    </>)
  }
  
}

 