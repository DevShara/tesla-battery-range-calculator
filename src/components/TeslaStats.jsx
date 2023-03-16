import React from "react";
import PropTypes from 'prop-types';
import './TeslaStats.css';


const TeslaStats = (props) => {
    return(
        <div className="tesla-stats">
           <ul>
            {props.carstats && props.carstats.map(stat => (
                    <li key={stat.model}>
                        <div className="tesla-stats-icon tesla-stats-icon"></div>
                        <p>{stat.miles}</p>
                    </li>
                ))}
           </ul>
        </div>
        
    )
}

TeslaStats.propTypes = {
    carstats: PropTypes.array
}

export default TeslaStats;