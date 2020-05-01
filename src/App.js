import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nasa from './components/Nasa';
import NasaDetail from './components/nasaDetails';
export default class App extends React.Component {
  render() {
    return(
        <Router>
          <Switch>
              <Route exact path="/" component={Nasa}/>
              <Route exact path="/NasaDetail" component={NasaDetail}/>
          </Switch>
        </Router>
    )
  }
}
