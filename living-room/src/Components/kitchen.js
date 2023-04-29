import React, {Component} from "react";
import Oven from "./oven";
import Sink from "./sink";

class Kitchen extends Component{
    render(){
        return (
          <>
          <div className="kitchen">
            kitchen
            <Oven/>
            <Sink/>
          </div>
          </>
        )
      }
}

export default Kitchen