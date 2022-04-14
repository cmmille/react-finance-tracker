import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { DeleteOutline } from "@mui/icons-material";

const ExpenseItem = (props) => {
  const currFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedAmount = currFormatter.format(props.amount);

  function deleteHandler(){
    props.onDelete(props.id)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
      <div className="expense-item__description">
        <div className="row">
          <div className="expense-item__price">{formattedAmount}</div>
          <DeleteOutline className="delete-icon" onClick = {deleteHandler}/>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
