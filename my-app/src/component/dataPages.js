import Gallery from "./Gallery/Gallery";
import Clock from "./Clock/Clock";
import TrafficLightStateful from "./TrafficLightStateful/TrafficLightContainer";
import TrafficLightStateless from "./TrafficLightStateless/TrafficLightStateless";
import Animate from "./Animate/Animate";


export default [
  {
    title: "Gallery",    
    component: Gallery,
    path: "/gallery"
  },
  {
    title: "Clock",    
    component: Clock,
    path: "/clock",
  },
  {
    title: "Traffic light (stateful)",    
    component: TrafficLightStateful,
    path: "/traffic-light-stateful",
  },
  {
    title: "Traffic light (stateless)",    
    component:  TrafficLightStateless,
    path: "/traffic-light-stateless",
  },
  {
    title: "Animate CSS",    
    component: Animate,
    path: "/animate",
  }
]; 
  








