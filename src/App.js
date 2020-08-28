import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navigation from './components/navigation';
import Footer from './components/footer';


function App() {
  return (
  <div>
    <div class="row">
      <div class="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
      <div class="col-lg-8 col-md-8 col-sm-10 col-xs-10">
        <Navigation />
        <main>
          <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path ="/resume" component={Resume} />
          </Switch>
        </main>
        </div>
      <div class="col-lg-2 col-md-2 col-sm-1 col-xs-1"></div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
