import { useState } from "react";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { uid } from "uid";

const App = () => {
  const initialExpenses = [
    {
      title: "Groceries",
      date: new Date(2021, 2, 10),
      amount: 96.28,
      key: uid(),
    },
    { title: "Amazon", date: new Date(2022, 1, 28), amount: 120.4, key: uid() },
    {
      title: "Microsoft",
      date: new Date(2022, 2, 1),
      amount: 59.99,
      key: uid(),
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  function addExpenseHandler(expenseItem) {
    const newExpense = {
      ...expenseItem,
      date: new Date(`${expenseItem.date} `),
      amount: parseFloat(expenseItem.amount),
      key: uid(),
    };
    setExpenses((prevState) => [newExpense, ...prevState]);
  }

  function deleteExpenseHandler(id) {
    setExpenses(prevState => {
      return prevState.filter(expense => expense.key !== id)
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} onDelete = {deleteExpenseHandler}/>
    </div>
  );
};

export default App;
