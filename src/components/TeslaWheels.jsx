import React from 'react';
import PropTypes from 'react';
import './TeslaWheels.css';

const TeslaWheels  = (props) => {
    const value = props.value;
    const changeHandler = props.handleChangeWheels;
    const sizes = [19, 21];

    return(
        <div className="tesla-wheels__component">
            <p className="tesla-wheels__title">Wheels</p>
            <div className="tesla-wheels__container cf">
            {sizes.map(size => {
                return(
                    <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
                    <input
                        type="radio"
                        name="wheelsize"
                        value={size}
                        checked={value === size} 
                        onChange={() => {changeHandler(size)}} />
                         <p>{size}</p>
                    </label>
                )
            })}
            </div>
        </div>
    )
}

TeslaWheels.propTypes = {
    value: PropTypes.number,
    handleChangeWheels: PropTypes.func
}

export default TeslaWheels;