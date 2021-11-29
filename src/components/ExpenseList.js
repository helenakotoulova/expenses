import ExpenseItem from "./ExpenseItem";
import classes from './ExpenseList.module.css';

function ExpenseList(props) {
  return (
    <ul className={classes.ul}>
      {props.polozky.map((polozka) => (
        <ExpenseItem
          key={polozka.id}
          id={polozka.id}
          name={polozka.name}
          date={polozka.date}
          castka={polozka.castka}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
