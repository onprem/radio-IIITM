import React, { Component } from 'react';
import './gallery.css'
import radio from '../../assets/radio.jpg';

class Gallery extends Component {

  componentWillMount(){
  }

  componentDidMount(){
  }

  render() {
    return (
	   	<div className='contact-container'>
        <div className="content">
          <div className="vcarousel-container">
            <div className="vcarousel my-vcarousel vcarousel--translate">
              <input className="vcarousel__activator" type="radio" name="vcarousel" id="F" checked="checked"/>
              <input className="vcarousel__activator" type="radio" name="vcarousel" id="G"/>
              <input className="vcarousel__activator" type="radio" name="vcarousel" id="H"/>
              <div className="vcarousel__controls">
                <label className="vcarousel__control vcarousel__control--backward" for="J"></label>
                <label className="vcarousel__control vcarousel__control--forward" for="G"></label>
              </div>
              <div className="vcarousel__controls">
                <label className="vcarousel__control vcarousel__control--backward" for="F"></label>
                <label className="vcarousel__control vcarousel__control--forward" for="H"></label>
              </div>
              <div className="vcarousel__controls">
                <label className="vcarousel__control vcarousel__control--backward" for="G"></label>
                <label className="vcarousel__control vcarousel__control--forward" for="I"></label>
              </div>
              <div className="vcarousel__track">
                <li className="vcarousel__slide">
                </li>
                <li className="vcarousel__slide">
                </li>
                <li className="vcarousel__slide">
                </li>
              </div>
              <div className="vcarousel__indicators">
                <label className="vcarousel__indicator" for="F"></label>
                <label className="vcarousel__indicator" for="G"></label>
                <label className="vcarousel__indicator" for="H"></label>
              </div>
            </div>
          </div>
          <h3>Nukkad Natak</h3>
          <div className="videos">
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/XgfZntXbSNM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/jiMhn0p9XAE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>        
          </div>
          <h3>Dance</h3>
          <div className="videos">
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3iu5nWCS05k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/nFKyAOXeVH4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GacZ91zs-is" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/JSgOkqkzyJc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <h3>Bundelkhandi Folk Songs</h3>
          <div className="videos">
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Gld5KNvKqEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>        
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/e9cEWbk3WhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <h3>Happy Happy!</h3>
          <div className="videos">
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Tgwyj2mG_YU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
		</div>
    );
  }
}

export default Gallery;