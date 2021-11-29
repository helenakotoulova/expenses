import {useEffect, useState} from 'react';
import AddNewExpense from './AddNewExpense';
import classes from './Expenses.module.css';
import ExpenseList from './ExpenseList';



function Expenses(props) {

    const [addNewExp, setAddNewExp] = useState(false);
    function addNewExpHandler() {
        setAddNewExp(true);
        setIsDisabled(true);
    }

    const [isLoading, setIsLoading] = useState(false);
    const [loadedExpenses, setLoadedExpenses] = useState([]);

    const [newInput,setNewInput]=useState(false);

    const [isDisabled, setIsDisabled]=useState(false);

    useEffect(()=> {
        setIsLoading(true);
        fetch("https://expenses-d518f-default-rtdb.firebaseio.com/expenses.json"
        ).then((response)=>{return response.json();
        }).then((mojePolozky) => {
            const myExpenses=[];
            for (const key in mojePolozky) {
                const mojePolozka={
                id: key,
                ...mojePolozky[key],
                };
            myExpenses.push(mojePolozka);
            }
        setLoadedExpenses(myExpenses)
        setIsLoading(false);
        setNewInput(false);
        setIsDisabled(false);
        console.log('rendered')
        })
    },[newInput])

    if (isLoading) {
        return(
            <p>Loading...</p>
        )
    }

    return(
        <div className={classes.body}>
            <div className={classes.firstPart}>
                <button className={classes.addNewExpButton} onClick={addNewExpHandler} disabled={isDisabled? true: false}>Add New Expense</button>
                {addNewExp && <AddNewExpense setNewExp={setAddNewExp} setNewInput={setNewInput}/>}
            </div>
            <div>
                <h2>Individual expenses</h2>
                <div> 
                </div>
                <div>
                    <ExpenseList polozky={loadedExpenses} />
                </div>
            </div>
        </div>
    )
}

export default Expenses;
//<MyMenu props={loadedExpenses}/>