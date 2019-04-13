import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import UserApp from './components/UserApp';
import Header from './components/common/Header';
//import Footer from './components/Footer';
import FetchDoctors from './components/FetchDoctors';

import { Switch, Route } from 'react-router';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route path='/doctors' component={FetchDoctors} />
      <div className="App">
          <Header home='Home' services= 'Services' about='About' />
          <ScrollableAnchor id={'home'}>
            <Home />
          </ScrollableAnchor>
          <ScrollableAnchor id={'services'}>
            <Services />
          </ScrollableAnchor>
          <ScrollableAnchor id={'about'}>
            <About />
          </ScrollableAnchor>
          <UserApp />
          {/* <Footer /> */}
        </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
