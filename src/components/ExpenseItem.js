import classes from './ExpenseItem.module.css';
//import {FaBeer} from "react-icons/fa"; 
/*
Pozn. k ikonam: npm install react-icons
import { } from 'react-icons/ 2 PISMENKA DLE DVOU PRVNICH PISMENEK IKONKY'

*/
import { BsCalendarDate } from "react-icons/bs";

function ExpenseItem(props) {
    return(
        <li className={classes.li}>
            <div className={classes.datumDiv}>
                <span className={classes.ikona}><BsCalendarDate size={30}/></span>
                <p className={classes.datum}>{props.date}</p>
            </div>
            <h3 className={classes.title}>{props.name}</h3>
            <p className={classes.castka}>{props.castka} $</p>
        </li>
    )
}

export default ExpenseItem;