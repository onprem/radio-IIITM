import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import clg_logo from '../../assets/clg_logo.png';

class Nav extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  // particleParams =
  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
    return (
        <nav className="navbar">
          <div className="logodiv">
            <a href="https://iiitm.ac.in"><img alt='' src={clg_logo} className="clogo" /></a>
            <span className="clgName">Indian Institute of Information Technology and Management</span>
          </div>
          <div className="linkdiv">
            <Link to="/"><span className="navi">HOME</span></Link>
              <Link to="/about"><span className="navi">ABOUT ABV-IIITM</span></Link>
              <Link to="/gallery"><span className="navi">GALLERY</span></Link>
              <Link to="/contact"><span className="navi">CONTACT US</span></Link>
          </div>
        </nav>
    );
  }
}

export default Nav;
