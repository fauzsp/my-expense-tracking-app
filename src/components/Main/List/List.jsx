import React, {useContext} from 'react'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);
    console.log(transactions, "checking values")
  return (
    <MUIList dense={false} className={classes.list}>
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
                    <IconButton onClick={() => deleteTransaction(transaction.id)} edge="end" aria-label="delete"><Delete/></IconButton>
                </ListItemSecondaryAction>
                </ListItem>    
            </Slide>
        ))}    
    </MUIList>
  )
}

export default List