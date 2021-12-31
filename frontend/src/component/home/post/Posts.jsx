import Looppost from "./Looppost";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPost } from "../../../service/api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getAllPost();
      console.log(response, "useeffect");
      //console.log("Use Effect");
      setPosts(response);
    };
    fetchData();
  }, []);

//  const posts = [1, 2, 3, 4, 5];
  return posts.map((p) => (
    <Grid item lg={3} sm={4} xs={12}>
      <Link to={`/detail`} style={{ textDecoration: "none", color: "inherit" }}>
        <Looppost post={p} />
      </Link>
    </Grid>
  ));
};

export default Posts;