import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles.js";

const Details = ({ title }) => {
  const classes = useStyles();
  return (
    <Card className={title === "INCOME" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography varient="h5">$50</Typography>
      </CardContent>
    </Card>
  );
};

export default Details;
