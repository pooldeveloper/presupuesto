import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types';

const Cuestion = ({setBudget, setRemaining, setShowQuestion}) => {
    //Definir states
    const [amount,setAmount] = useState(0);
    const [error,setError] = useState(false);
    //Defenir presupuesto
    const defineBudget = e =>{
       setAmount( parseInt(e.target.value, 10) );
    }
    //Submit par definir presupuesto
    const addBudget = e =>{
        e.preventDefault();

        //Validar
        if(amount < 0 || isNaN(amount)){
            setError(true);
            return
        }
        //Cuando pasa la validacion
        setError(false);
        setBudget(amount);
        setRemaining(amount);
        setShowQuestion(false)
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ?<Error message = "El Presupuesto es incorrecto" /> : null}
            <form
                onSubmit = {addBudget}
            >
                <input
                    type = "number"
                    className = "u-full-width"
                    placeholder = "Coloca tu presupuesto"
                    onChange = {defineBudget}
                />
                <input
                    type = "submit"
                    className = "button-primary u-full-width"
                    value = "Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 Cuestion.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setShowQuestion: PropTypes.func.isRequired
 }
export default Cuestion;