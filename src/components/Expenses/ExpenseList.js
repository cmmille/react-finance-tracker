import { useState } from "react";

import "./ExpenseList.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const expenses = props.expenses.sort((a, b) => (a.date < b.date ? 1 : -1));
  const allYears = [
    ...new Set(expenses.map((expense) => expense.date.getFullYear())),
  ]
    .sort()
    .reverse();
  const [filterYear, setFilterYear] = useState(-1);

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === filterYear;
  });

  function filterHandler(filterValue) {
    setFilterYear(parseInt(filterValue));
  }

  const passedExpenses = (filterYear === -1 ? expenses : filteredExpenses)

  return (
    <div>
      <Card className="expense-list">
        <ExpensesFilter
          onFilter={filterHandler}
          selectedYear={filterYear}
          filterOptions={allYears}
        />
        <ExpensesChart expenses={passedExpenses} />
        {passedExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.key}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default ExpenseList;
