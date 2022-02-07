import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
const Main = () => {
  return (
    <Card className={classes.root}>
      <CardHeader title="My expense tracking" subHeader="Expense tracker" />
    </Card>
  );
};

export default Main;
