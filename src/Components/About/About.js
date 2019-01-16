import React, { Component } from 'react';
import './About.css';
import radio from '../../assets/radio.jpg';
import iiitm from '../../assets/iiitm.jpg';

class About extends Component {

  constructor(){
    super();
    this.state={
    }
  }

  render() {
    return (
	   	<div className='bout-container'>
        <div className="content">
          <div className="radiodiv">
            <div className="radiologo"><img alt='' src={radio} /></div>
            <div className="radiotext"><p>Broadcasting Community Radio at <b>ABV IIITM</b> and online</p></div>
          </div>
          <div className="about" id="about">
            <h2>ABOUT ABV-IIITM</h2>
            <img alt='' src={iiitm} className="clgimg" />
            <p>
              Indian Institute of Information Technology and Management (IIITM) in Gwalior, Madhya Pradesh is an autonomous institute set by Government of India, Ministry of Human Resource Development (MHRD) in 1997. It is an effort by MHRD towards creating professionals in areas of management and information technology from the same institute. This institute was created for facilitating higher education, research, and consultancy in areas of information technology (IT) and business management. Initially started as IIITM, this institute was prefixed with ABV in 2002 to honour the then Prime Minister Atal Behari Vajpayee.

              <br /><center><b>The Beginning</b></center><br />
              The beginning of IIITM could be traced back to 1992, when MHRD under Dr. P. G. Reddy contemplated setting up of advanced information systems in the likes of IIMs and IITs in different locations of India. Subsequently in 1995, Government of India based on a report prepared by AICTE (All India Council for Technical Education) comprising eminent academicians, policy makers, and professionals decided on establishing national centres focussed on IT and management training.

              <br /><center><b>Committee</b></center><br />

              This essentially was the committee set up by MHRD under Dr. P. G. Reddy to study the comprehensive situation of software education and its utilization in India. With the demand for skilled information technology and management professionals reaching several thousands, it became necessary to establish specialised management and IT institutes similar to IIMs and IITs to bridge the gap between manpower demand and supply.   

              <br /><center><b>Policy</b></center><br />

              All pervasive growth of IT in India was triggered by Software Policy in 1986, Electronic Policy in 1985, and Computer Policy in 1984. These three policies in unison led to extensive use of computerised methods across different sectors of business, industries, and public administration thereby necessitating the need for competent professionals at different levels. Infrastructures like Internet, INDONET, NICNET, ERNET, and INFLIBNET were established for supporting this demand for widespread usage of computerised processes.

              <br /><center><b>Autonomy</b></center><br />

              IIITM was set up as an autonomous institute under Societies Registration Act. This centrally funded body run by a Board of Governors aims at offering education, research, training, and consultancy in fields of management and IT in an integrated way.
            </p>
          </div>
        </div>
		  </div>
    );
  }
}

export default About;
