import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
      <div>
        <Switch>   
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Header></Header>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/resume">
            <Resume></Resume>
          </Route>
          <Route path="/blog">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
