import './App.css';
import Welcome from './pages/WelcomePage'
import Project from './pages/Projects'
import Skills from './pages/Skills'
import Nav from './Nav'
import Footer from './Footer'

import {Switch, Route} from 'react-router-dom'
// import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Welcome /> 
          <Footer />
        </Route>
        <Route exact path="/projects">
          <Nav />
          <Project />
        </Route>
        <Route exact path="/skills">
          <Nav />
          <Skills />
        </Route>
        {/* <Route exact path="/contact">
          <Nav />
          <Contact />
        </Route> */}
      </Switch>
     
    </div>
  );
}

export default App;
