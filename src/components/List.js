import React from 'react'
import Spending from './Spending'
import PropTypes from 'prop-types';

const List = ({spendings}) =>(
    <div className = "gastos-realizados">
        <h2>Listado</h2>
        {
            spendings.map(spending =>(
                <Spending
                    spending = {spending}
                    key = {spending.id}
                />
            ))
        }
    </div>
);
 
List.propTypes = {
    spendings: PropTypes.array.isRequired
}
  
export default List;