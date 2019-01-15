import React, { Component } from 'react';

class Footer extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
    return (
      <footer>
        <div className="social">
          <span className="soico"><i className="fab fa-facebook"></i></span>
          <span className="soico"><i className="fab fa-twitter"></i></span>
          <span className="soico"><i className="fab fa-instagram"></i></span>
          <span className="soico"><i className="fab fa-linkedin"></i></span>
        </div>
      </footer>
    );
  }
}

export default Footer;
