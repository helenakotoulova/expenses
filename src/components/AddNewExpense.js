import classes from "./AddNewExpense.module.css";
import { useRef } from "react";

/*export const PolozkaContext=createContext({
    name: [],
    date: [],
    castka: [],
})*/

function AddNewExpense(props) {
  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const castkaInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredCastka = castkaInputRef.current.value;
    const polozka = {
      name: enteredName,
      date: enteredDate,
      castka: enteredCastka,
    };
    fetch("https://expenses-d518f-default-rtdb.firebaseio.com/expenses.json", {
      method: "POST",
      body: JSON.stringify(polozka),
      headers: { "Content-type": "application/json" },
    }).then(
    props.setNewExp(false),
    props.setNewInput(true));
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Expense name:</label>
          <input type="text" id="name" ref={nameInputRef} required />
        </div>
        <div>
          <label>When?</label>
          <input id="datum" type="date" ref={dateInputRef} required />
        </div>
        <div>
          <label>How much?</label>
          <input id="castka" type="number" ref={castkaInputRef} required />
          <span>$</span>
        </div>
        <div className={classes.actions}>
          <button>Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewExpense;
