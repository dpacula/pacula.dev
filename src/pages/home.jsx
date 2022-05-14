import React from 'react';
import me from '../assets/me.jpg';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div class="row">
      <Helmet>
        <title>pacula.dev - Home</title>
      </Helmet>
      <div class="col-lg-12 col-md-12 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 bottom">
              <div class="main-header"><h1>Hi, I’m Derek. <br></br>A Full Stack Web Developer living in Minnesota. Experinced in modern web development.</h1></div>
            </div>
            <div class="col-lg-4 top">
              <div><img class="main-header-img" src={me} alt="me"></img></div>
            </div>
          </div>
      </div>
      <div class="col-lg-12 col-md-12 col-xs-12">
          <div class="quick-sell-container">
            <div class="quick-sell-container-header">
              <h2>Quick Sell.</h2>
              <p>When you don't have time to look at everything.</p>
            </div>
            <div class="quick-sell-subc">
              <h3>Experience</h3>
              <ul>
                <li>Full Stack Web developer with 6+ years of experince.</li>
                <li>Co-Lead development of major start-to-finsh projects utilizing modern web tech including Vue, Angular, Node.JS, and AWS</li>
                <li>Responsbile for demoing products to clients and boards of clients</li>
                <li>Lay the foundation of projects that include CI/CD pipelines and infrastructure as code</li>
                <li>Lead meetings with multiple cilents and being entrusted to make all end goals possible</li>
              </ul>
            </div>
            <div class="quick-sell-subc">
              <h3>Projects</h3>
              <h4>Personal</h4>
              <ul>
                <li>SerweWX</li>
                <li>pacula.dev</li>
                <li>Custom Sonos server</li>
              </ul>
              <h4>Work Related</h4>
              <ul>
                <li>SecureCare Provider Portal</li>
                <li>Paramount Medical Group</li>
                <li>OTC</li>
                <li>Gavilion</li>
              </ul>
            </div>
            <div class="quick-sell-subc">
              <h3>About Me</h3>
              <ul>
                <li>Native Nebraskan born and raised. Go Big Red!</li>
                <li>Love anything that has to do with technology.</li>
                <li>Outside of the tech world, I enjoy doing all sorts oh physical activites including lifting weights, playing volleyball and golf, and spending time with my husky named Oakley.</li>
              </ul>
            </div>
          </div>
      </div>
  </div>
  );
}

export default Home;
