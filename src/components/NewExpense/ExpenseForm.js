import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formText, setFormText] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function handleChange(event) {
    const newText = event.target.value;
    const key = event.target.name;
    setFormText((prev) => {
      return { ...prev, [key]: newText };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSaveExpenseItem(formText);
    setFormText({
      title: "",
      date: "",
      amount: "",
    });
    props.isFormOpen()
  }


    return (
      <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              value={formText.title}
              name="title"
              type="text"
              placeholder="What did you buy?"
              onChange={handleChange}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              value={formText.amount}
              name="amount"
              type="number"
              placeholder="How much was it?"
              min="0.01"
              step="0.01"
              onChange={handleChange}
              required
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              value={formText.date}
              name="date"
              type="date"
              min="2000-01-01"
              max="2022-12-31"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.isFormOpen}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
};
export default ExpenseForm;
