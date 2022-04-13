import { useState } from "react"
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const initialExpenses = [
    {title: "King Soopers", date: new Date(2021, 2, 10), amount: 96.28},
    {title: "Liquor Store", date: new Date(2019, 2, 8), amount: 19.99},
    {title: "Amazon", date: new Date(2022, 1, 28), amount: 96.28},
    {title: "Microsoft", date: new Date(2022, 2, 1), amount: 96.28}
  ];
  const [expenses, setExpenses] = useState({
    expenses: initialExpenses
  })

  function addExpenseHandler(expenseItem){
    const newExpense = {...expenseItem, date: new Date(`${expenseItem.date} `)}
    expenses.expenses.push(newExpense)
    setExpenses((prev) => {
      return {...prev}
    })
  }


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseList expenses = {expenses}/>
    </div>
  );
}

export default App;
