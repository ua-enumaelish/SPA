import React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Navigator from "./component/Navigator";

export default class App extends React.Component{
  
  render(){
    return(   
      <Router>
        <Navigator/>
      </Router>
    )
  }
} 


