import React, { Component } from 'react';
import "./About.css";
import Portrait from "../assets/Portrait.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                // Image goes here
                src={Portrait}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Israel Haile</div>
              <div className="brief_description">
          {/*Details about you goes here*/}
          <p>I am a computer science major at Rice University. I am interested
             in software development, web development, and cybersecurity.</p>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}