import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget ?? 0);

    useEffect(() => {
        if (budget !== undefined) {
            setNewBudget(budget);
        }
    }, [budget]);

    const handleBudgetChange = (event) => {
        const inputBudgetValue = Number(event.target.value);
        setNewBudget(inputBudgetValue); // Update local state immediately

        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

        if (inputBudgetValue > 20000) {
            alert("This amount will exceed the limit of 20000");
            
        } else if (inputBudgetValue === totalExpenses) {
            alert("Your budget can't go lower than the current amount spent");
            setNewBudget(budget); 
        } else {
            dispatch({ type: 'SET_BUDGET', payload: inputBudgetValue });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
        </div>
    );
};

export default Budget;
