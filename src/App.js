import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/gallery" exact component={Gallery} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
