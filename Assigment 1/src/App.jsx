import { useState } from 'react'

import './App.css'
import Expenses from './components/Expenses';

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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );

}

export default App
