import './App.css';
import Welcome from './pages/WelcomePage'
import Project from './pages/Projects'
import Skills from './pages/Skills'
import Nav from './Nav'

import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome /> 
        </Route>
        <Route exact path="/projects">
          <Nav />
          <Project />
        </Route>
        <Route exact path="/skills">
          <Nav />
          <Skills />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
