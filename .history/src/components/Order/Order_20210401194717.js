import { CircularProgress, Container, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderCard from './OrderCard';



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));
const Order = () => {
  const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(() => {
      axios
        .get(
          `https://lychee-custard-24286.herokuapp.com/orderDetail?email=${loggedInUser.email}`
        )
        .then((res) => setOrderDetail(res.data))
        .catch((err) => console.log(err));
    }, [loggedInUser.email]);



  return (
    <div>
      {orderDetail.length === 0 ? (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      ) : (
        <Container>
          {orderDetail.length > 0 ? (
            <Grid container justify="center" spacing={4}>
              <Grid style={{ marginTop: "10px" }} xs={12} item>
                <Alert severity="success">
                  Dear {orderDetail[0]?.userName}, You Have order{" "}
                  {orderDetail.length} items!
                </Alert>
              </Grid>
              <Grid spacing={4} container xs={12} item>
                {orderDetail.map((product) => (
                  <Grid
                    alignContent="center"
                    container
                    item
                    direction="column"
                    xs={12}
                    sm={6}
                    md={4}
                  >
                    <OrderCard product={product} key={product._id} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          ) : (
            <div style={{ marginTop: "20px" }}>
              <Alert severity="error">You have no order!</Alert>
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default Order;