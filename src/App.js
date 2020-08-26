import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Navigation from './components/navigation';


function App() {
  return (
    <div>
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
  );
}

export default App;
