import React, {Component} from "react";
import Bath from "./Components/bath";
import BedRoom from "./Components/bedroom";
import Kitchen from "./Components/kitchen";
import LivingRoom from "./Components/livingroom";

class FloorPlan extends Component{
  render(){
    return (
      <>
      <div>
        <BedRoom name={1}/>
        <Kitchen/>
        <Bath name={'Full'}/>
        <BedRoom name={2}/>
        <LivingRoom/>
        <Bath name={'Half'}/>
        <BedRoom name={3}/>
      </div>
      </>
    )
  }
}

export default FloorPlan  