import { useState } from "react"
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import { uid } from "uid";

const App = () => {
  const initialExpenses = [
    {title: "King Soopers", date: new Date(2021, 2, 10), amount: 96.28, key: uid()},
    {title: "Liquor Store", date: new Date(2019, 2, 8), amount: 19.99, key: uid()},
    {title: "Amazon", date: new Date(2022, 1, 28), amount: 96.28, key: uid()},
    {title: "Microsoft", date: new Date(2022, 2, 1), amount: 96.28, key: uid()}
  ];
  const [expenses, setExpenses] = useState(initialExpenses)

  function addExpenseHandler(expenseItem){
    const newExpense = {...expenseItem, date: new Date(`${expenseItem.date} `), key: uid()}
    setExpenses(prevState => [newExpense, ...prevState])
  }


  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpenseList expenses = {expenses}/>
    </div>
  );
}

export default App;
