import { Card, CardContent, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
});
const ProductManage = () => {
    const classes = useStyles();
    const [product, setProduct] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/event")
            .then(res => setProduct(res.data))
            .catch(err=>console.log(err))
    }, []);
  console.log(product);
    return (
      <>
        <Grid container>
          <Grid className={classes.root} item xs={10}>
            <Typography variant="h6" component="p">
              Product name
            </Typography>
            <Typography variant="h6" component="p">
              Size
            </Typography>
            <Typography variant="h6" component="p">
              Price
            </Typography>
            <Typography variant="h6" component="p">
              edit/delete
            </Typography>
          </Grid>
          {product?.map((pd) => (
            <Grid key={pd._id} xs={10} item>
              <Card style={{ width: "100%", marginBottom: "20px" }}>
                <CardContent className={classes.root}>
                  <Typography variant="h6" component="p">
                    {pd.name}
                  </Typography>
                  <Typography variant="h6" component="p">
                    {pd.size}
                  </Typography>
                  <Typography variant="h6" component="p">
                    ${pd.price}
                  </Typography>
                  <Typography>
                    <IconButton color="primary">
                      <DeleteIcon />
                    </IconButton>

                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
};

export default ProductManage;