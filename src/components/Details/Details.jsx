import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import useStyles from "./styles.js";
import useTransactions from "../../useTransactions.js";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData, filteredCategories } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography varient="h5">$50</Typography>
        {chartData.labels.length > 0 && <Doughnut data={chartData} />}
      </CardContent>
    </Card>
  );
};

export default Details;
