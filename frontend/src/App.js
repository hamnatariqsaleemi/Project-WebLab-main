import Header from "./component/Header";
import Home from "./component/home/Home";
import Signin from "./component/signin/Signin";
import About from "./component/about/About";
// import Footer from "./component/home/Footer";
import { Box } from "@mui/material";
import { DetailView } from "./component/detail/DetailView";
import { CreateView } from "./component/create/CreateView";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      

      <Box style={{ marginTop: 64 }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<DetailView />} />
          <Route exact path="/create" element={<CreateView />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Box>
      {/* <Footer/> */}
    </BrowserRouter>
  
  );
}

export default App;
