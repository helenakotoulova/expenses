import {useState} from 'react';
import AddNewExpense from './AddNewExpense';
import classes from './Expenses.module.css';
import NewExpense from './NewExpense';

function Expenses(props) {

    const [addNewExp, setAddNewExp] = useState(false);
    function addNewExpHandler() {
        setAddNewExp(true);
    }


    return(
        <div className={classes.body}>
            <div className={classes.firstPart}>
                <button className={classes.addNewExpButton} onClick={addNewExpHandler}>Add New Expense</button>
                {addNewExp && <NewExpense />}
            </div>
            <div>
                <h2>Individual expenses</h2>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Expenses;
// <AddNewExpense onAddNewExpense={props.onAddNewExpense}/>