import React from "react";
import Header from "./Header";
import Nav from "../Nav";
import About from "./About";
import Advert from "./Advert";
import EmailSignup from "./EmailSignup";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Advert />
      <EmailSignup />
    </div>
  );
};

export default Homepage;
