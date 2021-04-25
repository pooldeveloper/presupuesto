import React from 'react'
import PropTypes from 'prop-types';

const Spending = ({spending}) =>{
    const {name, amount} = spending;
    return(
        <li className = "gastos">
            <p>
                {name}
            </p>
            <span className = "btn-gasto">
                ${amount}
            </span>
        </li>
    )
}

Spending.propTypes = {
    spending: PropTypes.object.isRequired
}

export default Spending;