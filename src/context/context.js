import React, {useReducer, createContext} from "react";
import contextReducer from "./contextReducer";
const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //Actions Creators
    const deleteTransaction = (id) => {
       return dispatch({type: "DELETE_TRANSACTION", payload: id})
    }
    const addTransaction = (transaction) => {
        return dispatch({type: "ADD_TRANSACTION", payload:transaction})
    }
    const balance = transactions.reduce((acc, currentVal) => (currentVal.type === "Expense" ? acc - currentVal.amount : acc + currentVal.amount), 0)
    // console.log(transactions, 'checking transactions')

    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction, addTransaction, transactions, balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}