import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css';

class About extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
	   	<div className='bout-container min-vh-100'>
		About
		</div>
    );
  }
}

export default About;
