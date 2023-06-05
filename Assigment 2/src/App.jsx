import { useState } from 'react'

import './App.css'
import NewExpense from './components/newExpenses/NewExpense';
import Expenses from './components/expenses/Expenses';

import ExpensesFilter from './components/expenses/ExpenseFilter';

function App() {
  const [count, setCount] = useState(0)

  const expenses = [
    {
      id: "e0",
      title: " Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e1",
      title: " New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e2",
      title: " Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: " New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter/>
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App
