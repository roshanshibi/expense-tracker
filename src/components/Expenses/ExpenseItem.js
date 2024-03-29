import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  const clickHandler = () => {
    console.log("Clicked");
  }

  return (  
      <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click </button>
    </Card>
  );
}

export default ExpenseItem;
