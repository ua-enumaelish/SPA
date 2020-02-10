import React from 'react'

export default class TraffickLight extends React.Component {
  getLampsBySTate = () => {
    const { lampState } = this.props;
    switch(lampState){ 
      default: return [null, null, null];
      case 0: return [0, null, null];
      case 1: return [null, 1, null];
      case 2: return [null, null, 2];
      case 3: return [null, 1, null];      
    }
  };

  render(){
    const { onRemove, onStart, onEnd } = this.props;
    
    return(
      <div
        className="traffic-container pb-3 pt-3 mr-1 mb-1 mt-5 bg-dark d-flex flex-column justify-content-center align-items-center rounded"
        style={{minWidth: 150}}
      >
        { this.getLampsBySTate().map((item, index) => <Lamp
          key={index}
          lamp={item}
        /> ) } 
        <button 
          onClick={onStart}
          className="traffic-btn start-btn text-light bg-dark"
        > 
          start 
        </button>         
        <button 
          onClick={onEnd}
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

class Lamp extends React.Component {
  render () {
    const { lamp } = this.props;
    let lampColor = '';
    switch(lamp){ 
      default: 
        lampColor = 'bg-secondary';
        break;
      case 0:
        lampColor = 'bg-danger';
        break;
      case 1:
        lampColor = 'bg-warning';
        break;
      case 2:
        lampColor = 'bg-success';
        break;
    }
    return <div className={`w-75 mb-3 rounded-circle ${lampColor}`} style={{ height: 100, width: 100 }}>

    </div>
  }
}