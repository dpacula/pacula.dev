import React from 'react';
import { Helmet } from 'react-helmet';
import dpResume2020 from '../assets/dpResume2020.pdf'

function Resume() {
  return (
  <div>
    <Helmet>
        <title>pacula.dev - Resume</title>
      </Helmet>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <div class="box">
            <h1>Let's Talk Resume.</h1>
            <a aria-label="Link to Resume" class="box-a-button" href={dpResume2020}>Download</a>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
          <div class="box">
            <h2>Summary.</h2>
            <p>
              Application Web Developer with 7+ years of experience with a wide arange of skills including Angular, Vue, Node.JS, SQL Technologies, and AWS. 
              Trusted person who has lead several projects start to finish, entrusted to listen to client requirements and feedback and helped fellow employees bring up their skills.
            </p>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="box" style={{margin:0}}>
          <h2>Work Experience.</h2>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="resume-box">
              <h2>Senior Developer | DevOps Enginner</h2>
              <span>Opti9 (Formerly Jelecos)</span>
              <ul>
                <li>Create and Develop custom infrastructure for automated application and infrastructure deployment</li>
                <li>Developing custom web applications including .NET, C# and serverless web applications using Javascript, Angular, Vue, Node.JS and AWS technologies</li>
                <li>Leading product demos to clients and board members</li>
                <li>Lead on-site client meetings to understand and articulate wants and desires</li>
                <li>Maintaining and developing both new and existing applications</li>
                <li>Responsible for translating business requirements into high quality technical designs and working software</li>
                <li>Developing wireframes and task flows based on user needs and translating these requirements to create create intuitive, user-friendly software</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="time-box">
              <h2>Time</h2>
              <span>June 2016 - Present</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="resume-box">
              <h2>Mobile Implementations Analyst</h2>
              <span>Fiserv</span>
              <ul>
                <li>Writing requirements for software development to authorization application</li>
                <li>Using, configuring, and modifying third party authorization simulators</li>
                <li>Creating detailed, client-facing test scripts for sanctioned, department-wide use</li>
                <li>Application Maintenance</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="time-box">
              <h2>Time</h2>
              <span>May 2013 - June 2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="box" style={{margin:0}}>
          <h2>Skills and Expertise</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="skills-box">
              <h2>Development Skills</h2>
              <ul>
                <li>Angular, Vue</li>
                <li>.NET MVC</li>
                <li>MySQL and Microsoft SQL</li>
                <li>SASS</li>
                <li>UI / UX Design</li>
                <li>Node.JS</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="skills-box">
              <h2>Employee Skills and Career Accomplishments</h2>
              <ul>
                <li>Communication and understanding client requirements</li>
                <li>AWS Certified DevOps Professional</li>
                <li>Training and mentoring new developers</li>
                <li>Two-time employee of the quarter winner at Jelecos</li>
                <li>Member of Jelecos Cloud Center of Excellence, an exclusive
                 leadership group
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Resume;