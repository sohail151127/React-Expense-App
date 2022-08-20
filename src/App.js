import Expenses from "./Components/Expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./Components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [ ]

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    
    const addExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }
    
    return(
        <>
        <div>
        <NewExpense onAddExpense={addExpenseHandler}/> 
        <Expenses item={expenses} />       
        </div>
        </>
    )
    
}


export default App;