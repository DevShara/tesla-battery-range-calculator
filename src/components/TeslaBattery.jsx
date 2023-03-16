import React from "react";
import './TeslaBattery.css';
import TeslaNotice from './TeslaNotice';
import TeslaCar from "./TeslaCar";
import TeslaStats from "./TeslaStats";



class TeslaBattery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            carstats: [],
            config: {
                speed: 55,
                temperature: 20,
                climate: true,
                wheels: 19
            }
        } 
    }

    render(){

        const {config, carstats} = this.state;

        return(
            <form className="tesla-battery">
                 <h1>Range Per Charge</h1>
                 <TeslaCar wheelsize={config.wheels} />
                 <TeslaStats carstats={carstats}/>
                 <TeslaNotice />
          </form>
        )
    }
}

export default TeslaBattery;