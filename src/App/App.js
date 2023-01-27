import React from "react";
import Home from "../Home/Home";
import Router from "../Router/Router";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Users from "../Users/Users";


const App = () => {
  return (

      <div>
          <Router path="/" component={Home} />
          <Router path="/about" component={About} />
          <Router path="/contacts" component={Contact} />
          <Router path="/users" component={Users} />
      </div>
  );
};

export default App;