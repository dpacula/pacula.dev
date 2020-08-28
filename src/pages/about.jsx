import React from 'react';
import { Helmet } from 'react-helmet'

function About() {
  return (
    <div class="row">
      <Helmet>
        <title>pacula.dev - About</title>
      </Helmet>
      <div class="col-lg-7 col-md-7 col-xs-7">
          <div class="box">
            <h2>About Me.</h2>
            <p>I'm Derek Pacula. I am a Full Stack Developer for a small local company called Jelecos. 
              I have a weather and music obsessed husband named Matt.
              Together, we have a wonderful and stubborn husky named Oakley!
            </p>
          </div>
          <div class="box">
            <h2>Field Knowledge.</h2>
            <p> Currently At Jelecos, I am a Full Stack Developer working with a variety of technology.
              Jelecos is a APN AWS Partner, driving innovation in the field. Being a partner, I am a certified AWS DevOps Proffesional giving
              our clients the trust and expertise they would expect.
              <br>
              </br> 
            </p>
            <p>Along with DevOps knowledge I lead and design modern application stacks written in
              Angular and Vue utilizing AWS Lambda, S3, RDS, and other services to drive solutions.
            </p>
          </div>
          <div class="box">
            <h2>When I'm not working...</h2>
            <p> When I'm not working, I am avid fitness, sports, and tech junky. You'll either find me at the gym, golfing, or reading up on the latest tech.
            </p>
          </div>
      </div>
  </div>
  );
}

export default About;