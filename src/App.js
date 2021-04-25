import { useState, useEffect} from 'react';
import Cuestion from './components/Cuestion'
import Form from './components/Form'
import List from './components/List'
import ControlBudget from './components/ControlBudget'
function App() {
  const[budget, setBudget] = useState(0);
  const[remaining, setRemaining] = useState(0);
  const[showQuestion, setShowQuestion] = useState(true);
  const[spendings, setSpendings] = useState([]);
  const[spending, setSpending] = useState({});
  const[createSpending, setCreateSpending] = useState(false) 

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(createSpending){
      setSpendings([
        ...spendings,
        spending
      ])
      setRemaining(remaining - spending.amount)
      setCreateSpending(false)
    }
  }, [createSpending, spending, spendings, remaining])
  
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className = "contenido-principal contenido">
          {showQuestion 
            ?
              (
                <Cuestion
                  setBudget = {setBudget}
                  setRemaining = {setRemaining}
                  setShowQuestion = {setShowQuestion}
                />
              ) 
            :
              (
                <div className = "row">
                  <div className = "one-half column">
                    <Form 
                      setSpending = {setSpending}
                      setCreateSpending = {setCreateSpending}
                    />
                  </div>
                  <div className = "one-half column">
                    <List 
                      spendings = {spendings}
                    />
                    <ControlBudget
                      budget = {budget}
                      remaining = {remaining}
                      
                    />
                  </div>
                </div>    
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
