import AddNewExpense from "./AddNewExpense"

function NewExpense() {
    function newExpenseHandler(polozka) {
        console.log('ahoj')
        const name=polozka[0];

    }

    return(
        <div>
            <AddNewExpense onAddNewExpense={newExpenseHandler} />
            <p></p>
        </div>
    )
}

export default NewExpense;