import React, {Component} from "react";

class Bath extends Component{
    render(){
        return (
          <>
          <div className="Bath">
            {this.props.name} Bath
          </div>
          </>
        )
      }
}

export default Bath