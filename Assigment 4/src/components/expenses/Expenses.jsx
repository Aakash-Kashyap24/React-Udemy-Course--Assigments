import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpenseFilter';
import Card from '../card/Card';
import ExpensesChart from './ExpenseChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {
          filteredExpenses.length === 0 ? (
            <div>
              <p>No Item</p>
            </div>) : (

            <ExpensesList items={filteredExpenses} />

          )
        }
        <ExpensesChart expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;