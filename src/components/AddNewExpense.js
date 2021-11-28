import classes from './AddNewExpense.module.css';
import {useRef, createContext} from 'react';

/*export const PolozkaContext=createContext({
    name: [],
    date: [],
    castka: [],
})*/

function AddNewExpense(props) {
    const nameInputRef=useRef();
    const dateInputRef=useRef();
    const castkaInputRef=useRef();

    function submitHandler(e) {
        e.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredDate=dateInputRef.current.value;
        const enteredCastka=castkaInputRef.current.value;
        const polozka = {
            name:enteredName,
            date:enteredDate,
            castka:enteredCastka,
        }
        props.onAddNewExpense(polozka);
    }
   
    
    return(
        <div>
            <form className={classes.form} onSubmit={submitHandler}>
                <div>
                    <label htmlFor='name'>Expense name:</label>
                    <input type="text" id='name' ref={nameInputRef} required />
                </div>
                <div>
                  <label>Kdy?</label>
                    <input id='datum' type='date' ref={dateInputRef} required />  
                </div>
                <div>
                    <label>Kolik?</label>
                    <input id='castka' type='number' ref={castkaInputRef} required />
                    <span>$</span>
                </div>
                <div>
                    <button type='submit'>Add new Expense</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewExpense;