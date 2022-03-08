import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
const List = () => {
    const classes = useStyles();
    const globalVar = useContext(ExpenseTrackerContext);
    console.log(globalVar, "checking values")
    const transactions = [
        {id: 2, type: "Income", category: "Salary", amount: 50, date: "Mar 08 2022"},
        {id: 3, type: "Expense", category: "Salary", amount: 50, date: "Mar 09 2022"},
        {id: 4, type: "Income", category: "Salary", amount: 50, date: "Mar 10 2022"}
    ]
  return (
    <MUIList dense={false} className={classes.list} >
        {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                <ListItemAvatar>
                    <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                        <MoneyOff/>    
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete"><Delete/></IconButton>
                </ListItemSecondaryAction>
                </ListItem>    
            </Slide>
        ))}    
    </MUIList>
  )
}

export default List