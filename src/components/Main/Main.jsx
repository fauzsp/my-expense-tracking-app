import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="My expense tracking" subHeader="Expense tracker" />
      <CardContent>
        <Typography varient="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography varient="subtitle" style={{lineHeight: '1.5em', marginTop: '20px'}}>
          Try saying Add income for $100 in category salary for Monday...
        </Typography>
        <Divider/>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {/* LIST */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
