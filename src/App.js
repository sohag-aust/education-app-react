import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Teachers from './components/Teachers/Teachers';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/courses">
              <Courses />
            </Route>

            <Route exact path="/teachers">
              <Teachers />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
