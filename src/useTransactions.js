import {useContext} from "react";
import { ExpenseTrackerContext } from "./context/context";
import { incomeCategories, expenseCategories, resetCategories } from './contants/category';

const useTransactions = (title) => {
    resetCategories();
    debugger;
    const {transactions} = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((e) => e.type === title);
    const total = transactionsPerType.reduce((accumulated, currentVal) => accumulated += currentVal.amount, 0); 
    const categories = title === "Income" ? incomeCategories : expenseCategories;
    console.log(transactionsPerType, total, categories, 'checking categories`')
    transactionsPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);
        if(category) category.amount += t.amount;
    });
    const filteredCategories = categories.filter((e) => e.amount > 0);
    const chartData = {
    datasetes: [{
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color)
    }],
    labels: filteredCategories.map((e) => e.type)
}
    return {filteredCategories, total, chartData}
}
export default useTransactions;