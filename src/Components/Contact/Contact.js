import React, { Component } from 'react';
import './contact.css'
import radio from '../../assets/radio.jpg';

class Contact extends Component {

  componentWillMount(){
  }

  componentDidMount(){
  }

  render() {
    return (
	   	<div className='contact-container'>
        <div className="content">
          <div className="radiodiv">
            <div className="radiologo"><img alt='' src={radio} /></div>
            <div className="radiotext"><p>Broadcasting Community Radio at <b>ABV IIITM</b> and online</p></div>
          </div>
          <div className="contact">
            <h2>CONTACT US</h2>
            <div className="contact-card">
              <h4>Studio Phone</h4>
              <span>Phone: 9889988998</span>
            </div>
            <div className="contact-card">
              <h4>Station Manager</h4>
              <span><b>Official Business</b></span>
              <span>Email: <a href="mailto:radio@iiitm.ac.in">radio@iiitm.ac.in</a></span>
              
            </div>
            <div className="contact-card">
              <h4>Assistant Station Manager</h4>
              <span><b>General Information</b></span>
              <span>Email: <a href="mailto:asm.radio@iiitm.ac.in">asm.radio@iiitm.ac.in</a></span>
            </div>
            <div className="contact-card">
              <h4>Music Director</h4>
              <span><b>Promos</b></span>
              <span>Email: <a href="mailto:md.radio@iiitm.ac.in">md.radio@iiitm.ac.in</a></span>
              
            </div>
            <div className="contact-card">
              <h4>Program Director</h4>
              <span><b>Radio Scheduling/Automation System</b></span>
              <span>Email: <a href="mailto:program.radio@iiitm.ac.in">program.radio@iiitm.ac.in</a></span>
              
            </div>
            <div className="contact-card">
              <h4>Technical Director</h4>
              <span><b>Equipment and Systems</b></span>
              <span>Email: <a href="mailto:td.radio@iiitm.ac.in">td.radio@iiitm.ac.in</a></span>
            </div>
            <div className="contact-card">
              <h4>Mailing Address</h4>
              <span><b>RADIO-IIITM XX.XFM</b></span>
              <span>ABV IIITM Campus</span>
              <span>Morena Link Road</span>
              <span>Gwalior, 474014</span>
            </div>
            <div className="contact-card">
              <h4>Office Location</h4>
              <span>ABV IIITM Campus</span>
              <span>Morena Link Road, Gwalior</span>
            </div>
          </div>
        </div>
		</div>
    );
  }
}

export default Contact;