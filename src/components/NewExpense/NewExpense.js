import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);

  function saveNewExpenseItem(newExpenseItem) {
    props.onAddExpense(newExpenseItem);
  }

  function collapsedFormHandler() {
    setFormOpen((prev) => !prev);
  }

  return (
    <div className="new-expense">
      {!formOpen && <button onClick={collapsedFormHandler}>Add New Expense</button>}
      {formOpen && <ExpenseForm onSaveExpenseItem={saveNewExpenseItem} isFormOpen={collapsedFormHandler} />}
    </div>
  );
};
export default NewExpense;
