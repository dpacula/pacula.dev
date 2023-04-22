import React from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div className="row">
      <Helmet>
        <title>pacula.dev - About</title>
      </Helmet>
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <div className="box">
          <h2>About Me.</h2>
          <p>
            I'm Derek Pacula. I am a Full Stack Developer for a local company
            called Jelecos. I have a Computer Science degree from the University
            of Nebraska - Omaha. I have a weather and music obsessed husband
            named Matt and together, we have a wonderful and stubborn husky
            named Oakley!
          </p>
        </div>
        <div className="box">
          <h2>Field Knowledge.</h2>
          <p>
            {" "}
            Currently at Jelecos, I am a Full Stack Developer working with a
            variety of technology. Jelecos is a APN AWS Partner, driving
            innovation in the field. As an employee of a AWS partner, I am a
            certified AWS DevOps Proffesional giving our clients the trust and
            expertise they would expect.
            <br></br>
          </p>
          <p>
            Along with DevOps knowledge, I lead and design modern application
            stacks written in Angular and Vue utilizing AWS Lambda, S3, RDS, and
            other services to drive solutions.
          </p>
        </div>
        <div className="box">
          <h2>When I'm not working...</h2>
          <p>
            {" "}
            When I'm not working, I am an avid fitness, sports, and tech junky.
            You'll either find me at the gym, golfing, or reading up on the
            latest tech. If I am not in Nebraska, chances are I am at the{" "}
            <a href="https://www.northavegrill.com">The North Avenue Grill</a>,
            my favorite resturant in Milwaukee, WI.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
