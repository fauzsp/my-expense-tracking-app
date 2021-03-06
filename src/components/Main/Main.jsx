import React, {useContext} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { ExpenseTrackerContext } from '../../context/context';
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
const Main = () => {
  const classes = useStyles();
  const {balance} = useContext(ExpenseTrackerContext)
  return (
    <Card className={classes.root}>
      <CardHeader title="My expense tracking" />
      <CardContent>
        <Typography varient="h5" align="center">
          {`Total ${balance} $100`}
        </Typography>
        <Typography varient="subtitle" style={{lineHeight: '1.5em', marginTop: '20px'}}>
          Try saying Add income for $100 in category salary for Monday...
        </Typography>
        <Divider/>
        <Form/>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
