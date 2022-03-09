import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles.js";
import useTransactions from "../../useTransactions.js";

const Details = ({ title }) => {
  const classes = useStyles();
  const {total, chartData, filteredCategories} = useTransactions(title);
  debugger;
  console.log(chartData, 'character data1');
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography varient="h5">$50</Typography>
       {chartData.datasetes.length > 1 && <Doughnut data={chartData}/>}
      </CardContent>
    </Card>
  );
};

export default Details;
