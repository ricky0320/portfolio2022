import React from 'react';
import myselfImage from '../../assets/images/myself.jpg';

function About() {
  return (
    <section id="about-me" class="intro">
      <div>
          <h2 class="title-font">
            About Me
          </h2>
          <img src="./assets/images/myself.jpg" alt="" />
      </div>
      <div>
        <h3 class="slogan1 rainbow-text">
          Work Hard Play Hard
        </h3>
      </div>
    
      <div>
        <p>
          Hi everyone! My name is Ricky. I was born in Hong Kong. 
          I graduated in UC Riverside with a Business Administration Major. 
          I'm currently working as an IT Operations Support Administrator in city and county of San Francisco.
          <br/>
          I love playing video games and music. I love technologies and computers so I have chosen to work in the 
          IT field.
          <br/>
          I joined the UC Berkeley coding bootcamp to increase my skill sets.
          My goal is to work at one of the FAANG companies.
        </p>
      
      </div>
      <div>
        <h3 class="slogan2 rainbow-text">
          Never Give Up
        </h3>
      </div>
    </section>
  )
}

export default About;