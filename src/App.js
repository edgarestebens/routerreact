import React, { Component } from 'react';
import { Router, IndexRoute, Route, browserHistory} from 'react-router';
import './App.css';


const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const Template =(props) => {
  return(
      <div>
        <h1>Mi super aplicación</h1>
          {props.children}
      </div>       
    )
}

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Template}>
          <IndexRoute component={Home} />
          <Route path="about"component={About} />
        </Route>
      </Router>
    );
  }
}

export default App;
