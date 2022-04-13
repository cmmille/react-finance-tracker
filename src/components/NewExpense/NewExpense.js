import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
function saveNewExpenseItem(newExpenseItem){
    props.onAddExpense(newExpenseItem)
}

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseItem = {saveNewExpenseItem}/>
    </div>
}
export default NewExpense;