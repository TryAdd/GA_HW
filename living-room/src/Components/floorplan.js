import React, { Component } from 'react';
import Bath from './bath';
import BedRoom from './bedroom';
import Kitchen from './kitchen';
import LivingRoom from './livingroom';

class FloorPlan extends Component{
    render(){
        return (
            <>
                <Kitchen/>
                <LivingRoom/>
                <BedRoom/>
                <Bath/>
                
            </>
        )
    }
}

export default FloorPlan