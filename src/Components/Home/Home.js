import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import radio from '../../assets/radio.jpg';

class Home extends Component {

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
      <div className="container">
        <div className="content">
          <div className="radiodiv">
            <div className="radiologo"><img alt='logo' src={radio} /></div>
            <div className="radiotext"><p>Broadcasting Community Radio at <b>ABV IIITM</b> and online</p></div>
          </div>
          <div className="carousel-container">
            <div className="carousel my-carousel carousel--translate">
              <input className="carousel__activator" type="radio" name="carousel" id="F" checked="checked"/>
              <input className="carousel__activator" type="radio" name="carousel" id="G"/>
              <input className="carousel__activator" type="radio" name="carousel" id="H"/>
              <input className="carousel__activator" type="radio" name="carousel" id="I"/>
              <input className="carousel__activator" type="radio" name="carousel" id="J"/>
              <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="J"></label>
                <label className="carousel__control carousel__control--forward" for="G"></label>
              </div>
              <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="F"></label>
                <label className="carousel__control carousel__control--forward" for="H"></label>
              </div>
              <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="G"></label>
                <label className="carousel__control carousel__control--forward" for="I"></label>
              </div>
              <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="H"></label>
                <label className="carousel__control carousel__control--forward" for="J"></label>
              </div>
              <div className="carousel__controls">
                <label className="carousel__control carousel__control--backward" for="I"></label>
                <label className="carousel__control carousel__control--forward" for="F"></label>
              </div>
              <div className="carousel__track">
                <li className="carousel__slide">
                </li>
                <li className="carousel__slide">
                </li>
                <li className="carousel__slide">
                </li>
                <li className="carousel__slide">
                </li>
                <li className="carousel__slide">
                </li>
              </div>
              <div className="carousel__indicators">
                <label className="carousel__indicator" for="F"></label>
                <label className="carousel__indicator" for="G"></label>
                <label className="carousel__indicator" for="H"></label>
                <label className="carousel__indicator" for="I"></label>
                <label className="carousel__indicator" for="J"></label>
              </div>
            </div>
          </div>
          <div className="about" id="about">
                    <h2>WELCOME</h2>
                    <p>Radio has touched the sentiments of the vast section of Indian society. Many who are in their middle age can remember the days in the early 80's.The dependence on radio had gone to such an extent, that families would rely on the timings of the radio program for their activities. Many would relate starting of a particular radio program as time to leave for their offices, sending kids to school, or starting work etc.However, with the advent of television in the mid 80's the radio began to loose its sheen as a potent entertainment media. Television became a major rival to the radio by adding the visual dimension to entertainment. In order to reinvent the radio, it had to be put into a place where television had not reached, for example in rural areas , inaccessible interior areas of our country where electricity had not reached, inside a moving car and trains etc.The radio received a new lease of life when in July 1999, the government allowed private operators to enter the FM radio broadcasting sector. The new face of the radio was no shorter than a revolution by reaching the car stereos to mobiles. The FM stations besides giving a new face to radio also played a role in popularising the local culture and highlighting the spirit of the people. The radio once again has become a personal friend of everyone at the steering wheel or a youngster idling away time in the corner of a college canteen. Can the leader of technology not be a part of this communication revolution? Bringing in our scientific and technical expertise along with entertainment we can possibly make IIITM Gwalior FM radio an unique gateway to knowledge.</p>
              </div>
        </div>
      </div>
    );
  }
}

export default Home;
