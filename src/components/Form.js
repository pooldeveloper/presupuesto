import React, {useState} from "react";
import Error from './Error';
import shortid from 'shortid'
import PropTypes from 'prop-types';

const Form = ({setSpending, setCreateSpending}) => {

    const[name, setName] = useState('');
    const[amount, setAmount] = useState(0);
    const[error, setError] = useState(false);

    const addExpense = e =>{
        e.preventDefault();

        //Validar
        if(amount < 1 || isNaN(amount) || name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        //Construir el gasto
        const spending = {
          name,
          amount,
          id: shortid.generate()
        }
        //Pasar al componente principal
        setSpending(spending);
        setCreateSpending(true);
        //Resetear el formulario
        setName('');
        setAmount(0);
    }

  return (
    <form
        onSubmit = {addExpense}
    >
      <h2>Agrega tus gastos aqui</h2>
      {error ? <Error message = "Los campos son obligatorios o Presupuesto incorrecto"/> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange = {e =>setName(e.target.value)}
          value = {name}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value = {amount}
          onChange = {e =>setAmount(e.target.value)}
          />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Form.propTypes = {
  setSpending: PropTypes.func.isRequired,
  setCreateSpending: PropTypes.func.isRequired
}

export default Form;
