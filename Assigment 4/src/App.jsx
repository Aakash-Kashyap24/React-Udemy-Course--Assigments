import { useState } from 'react'

import './App.css'
import NewExpense from './components/newExpenses/NewExpense';
import Expenses from './components/expenses/Expenses';

import ExpensesFilter from './components/expenses/ExpenseFilter';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [openNewExpenses,setOpenNewExpenses]=useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const openNew=()=>{
    setOpenNewExpenses(!openNewExpenses)
  }
  console.log("open",openNewExpenses)

  return (
    <div>
      {
        !openNewExpenses && <button onClick={() => setOpenNewExpenses(!openNewExpenses)}>Add New Expenses</button>
      }
      {
        openNewExpenses && <NewExpense onAddExpense={addExpenseHandler} open={openNew} />

      }

      <Expenses items={expenses} />
    </div>
  );
};
export default App
