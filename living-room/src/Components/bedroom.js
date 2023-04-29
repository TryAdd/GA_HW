import React, {Component} from "react";

class BedRoom extends Component{
    render(){
        return (
          <>
          <div className="bedroom">
            Bedroom {this.props.name} 
          </div>
          </>
        )
      }
}

export default BedRoom