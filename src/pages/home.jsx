import React from 'react';
import me from '../assets/me.jpg';

function Home() {
  return (
    <div class="row">
      <div class="col-lg-12 col-md-12 col-xs-12">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 bottom">
              <div class="main-header"><h1>Hi, I’m Derek. <br></br> I’m an Full Stack Web Developer from Nebraska. Experinced in modern web development.</h1></div>
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
                <li>Full Stack Web developer with 5+ years of experince.</li>
                <li>Co-Lead development of two major start-to-finsh projects utilizing modern web tech including Vue, Angular, Node.JS, and AWS</li>
                <li>Responsbile for demoing products to clients and boards of clients</li>
              </ul>
            </div>
            <div class="quick-sell-subc">
              <h3>Projects</h3>
              <ul>
                <li>SecureCare Provider Portal</li>
                <li>Bridge Healthcare (Launching Soon)</li>
                <li>SerweWX</li>
              </ul>
            </div>
            <div class="quick-sell-subc">
              <h3>About Me</h3>
              <ul>
                <li>Native Nebraskan born and raised.</li>
                <li>Crazy about tech</li>
              </ul>
            </div>
          </div>
      </div>
  </div>
  );
}

export default Home;
