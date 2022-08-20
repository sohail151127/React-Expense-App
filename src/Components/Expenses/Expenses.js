import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    

    return(
        <Card>
        <div className="expenses">

            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount} />
                    )
                )
            }
        </div>
        </Card>
    )
}

export default Expenses;