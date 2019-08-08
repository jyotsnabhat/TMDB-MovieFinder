import React from "react";
import Movies from "../movies/Movies";
import Search from "../movies/Search";
import Navbar from "./Navbar";

const Index = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Search/>
      <Movies/>
    </React.Fragment>
  );
};

export default Index;
