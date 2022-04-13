import "./ExpenseDate.css"

function ExpenseDate(props){
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.toLocaleString('en-US', {year: 'numeric'});

    return (
        <div className="date-container">
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>

        </div>
    );
}

export default ExpenseDate;