import React, {useState, useContext} from 'react';
import {v4 as uuidv4} from "uuid";
import { incomeCategories, expenseCategories } from '../../../contants/category';
import {
    InputLabel,
    Typography,
    FormControl,
    TextField,
    MenuItem,
    Select,
    Grid,
    Button,
    Divider,
  } from "@material-ui/core";
import useStyles from './styles';
import { ExpenseTrackerContext } from '../../../context/context';
import fomatDate from '../../../utils/formatDate';
const initialState = {amount: '', category: '', type: "Income", date: fomatDate(new Date())};

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const {addTransaction} = useContext(ExpenseTrackerContext);
    const createTransaction = () => {
        const transaction = {...formData, amount: Number(formData.amount), id: uuidv4()}
        addTransaction(transaction);
        setFormData(initialState)
    }
    const selectedCategory = formData.type === "Income" ? incomeCategories : expenseCategories;

    return (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography align="center" varient="subtitle2" gutterButton>
                ...    
            </Typography>    
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                <MenuItem value="Income">
                    Income
                </MenuItem>
                <MenuItem value="Expense">
                    Expense
                </MenuItem>
            </Select>
        </FormControl> 
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select value={FormData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
               {selectedCategory.map((category) => <MenuItem value={category.type}>{category.type}</MenuItem>)}
            </Select>
        </FormControl> 
        </Grid>
        <Grid item xs={6}>
            <TextField value={formData.amount} onChange={(e) => setFormData({...formData, amount: e.target.value})} onch type="number" label="amount" fullWidth/>
        </Grid>
        <Grid item xs={6}>
            <TextField value={formData.date} onChange={(e) => setFormData({...formData, date: fomatDate(e.target.value)})} type="date" label="Date" fullWidth/>
        </Grid>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form;