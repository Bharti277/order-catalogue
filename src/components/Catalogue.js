import React from "react";
import "./Catalogue.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  title: {
    marginTop: "80px",
  }
}));

function Catalogue(props) {
  const classes = useStyles();
  const [page, setPage] = useState('products');

  const addToCart = (item) => {
    console.log("I am catalogue");
    props.addToCart(item);
  };


  return (
    <React.Fragment>
    <h1 className={classes.title}>Best Collection of Cars</h1>
    <div className="catalogue root">
      {props.accessData.map((data) => (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          p={1}
          m={1}
          bgcolor="background.paper"
          key={data.id}
        >
          <Box p={0} bgcolor="grey.900" color="white">
            <span>
              <h3>Car Name : {data.car}</h3>
            </span>
          </Box>
          <Box p={1} bgcolor="grey.500" fontSize="20px">
            <span>Car Model : {data.model}</span>
          </Box>
          <Box p={1} bgcolor="grey.500" fontSize="20px">
            <span>Model Year : {data.model_year}</span>
          </Box>
          <Box p={1} bgcolor="grey.500" fontSize="20px">
            <span>Car Color : {data.color}</span>
          </Box>
          <Box p={1} bgcolor="grey.500" fontSize="20px">
            <span>Address : {data.address}</span>
          </Box>
          <Button variant="contained" color="secondary" onClick={addToCart}>
            Add To Cart{data.length}
          </Button>
        </Box>
      ))}
    </div>
    </React.Fragment>
  );
}

export default Catalogue;
