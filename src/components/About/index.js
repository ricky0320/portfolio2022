import React from "react";
import coverImage from "../../assets/profilePic.jpg";

function About() {
  return (
    <section id="about" className="flex-row">
      <h2 class="is-size-3 has-text-weight-bold">Work Hard Play Hard! Never Give Up!</h2>
      <div id="sideByside">
        <div id="me-image">        
          <img id="me" src={coverImage} className="my-2" alt="Ricky Leung"/>
        </div>
        <div id="left">
          <p className="">
            Hi everyone! My name is Ricky. I was born in Hong Kong. 
            I graduated in UC Riverside with a Business Administration Major. 
            I'm currently working as an IT Operations Support Administrator in city and county of San Francisco.
            <br/>
            I love playing video games and music. I love technologies and computers so I have chosen to work in the 
            IT field.
            <br/>
            I joined the UC Berkeley coding bootcamp to increase my skill sets.
            My goal is to work at one of the FAANG companies and work as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;