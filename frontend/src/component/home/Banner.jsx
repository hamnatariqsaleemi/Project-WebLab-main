import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  header:{
    fontSize: 50,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    background: `url(${"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}) center/55% repeat-x #000`,
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    "& :first-child": {
      fontSize: 50,
      color: "#ffea00",
      lineHeight:1 ,
      justifyContent: "left",
      alignItems: "left",
    },
   
  },
  
});

function Banner() {
  const classes = useStyle();
  const url = "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
    <Typography className ="header"> <h1>My Fashion Story</h1></Typography>
      <Box className={classes.image}>
      </Box>
    </>
  );
}

export default Banner;
