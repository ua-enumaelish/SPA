import React, { useState } from 'react';
import './style.css';
import { 
  Switch,  
  Route,
  Link
} from "react-router-dom";
import links from "./dataPages";
import Header from './Header';



export default function Navigator() {
  
  const [style, setStyle] = useState("menu");
  
  //This function works with menu-button like toggle
  function toggleStyle(){
    if(document.body.clientWidth < 768){
      style === "menu" ? setStyle("menu_active") : setStyle("menu"); 
    }   
  }
  
  return (<>
    
  <Header
    title={"Learning React"}    
  />
  
    <nav className={style}>

      {/*Hamburger button visible up 768px */}
      <button 
        onClick={ () => toggleStyle()}
        className="menu-btn">
        <span className="menu-btn__line"></span>
      </button>

      <div className="row">
        <div className="menu__container col-lg-3 col-md-2 list-group bg-dark text-center">

          {/* Create Link component */}
          {links.map( (item, index ) => (
            <Link
              onClick={ () => toggleStyle()}                    
              to={item.path}   
              className="menu__link list-group-item border-0 text-light text-uppercase list-group-item-action bg-dark" 
              key={index}        
            >
              {item.title}
            </Link>
          ))} 
          </div>

          <Switch>
            <>
            <div className="offset-lg-3 offset-md-2"/> 
              <div className="task col-lg-9 col-md-10 text-left">
                {
                  links.map( (task, index) => (
                    <Route
                      key = {index}
                      path = {task.path}
                      component = {task.component}
                    />
                  ))
                }
              </div>
            </>
          </Switch>
      </div>
    </nav>
</>
  );
}



