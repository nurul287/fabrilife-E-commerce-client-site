import { Container, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ShopCard from "./ShopCard/ShopCard";

const Shop = () => {
     const [event, setEvent] = useState([]);

     useEffect(() => {
       axios
         .get("http://localhost:5000/event")
         .then((res) => setEvent(res.data))
         .catch((error) => console.log(error));
     }, []);

    return (
      <div>
        <Container>
          <Grid container direction="column" alignItems="center">
            <h1> Discover the latest t-shirt available today</h1>
            {event.length === 0 && <CircularProgress />}
          </Grid>
          <Grid container justify="center" spacing={4}>
            {event.map((product, index) => (
              <Grid justify="center" item xs={12} sm={6} md={4}>
                <ShopCard product={product} key={index} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
};

export default Shop;