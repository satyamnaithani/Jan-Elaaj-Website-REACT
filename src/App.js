import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import UserApp from './components/UserApp';
import Header from './components/Header';
// import Footer from './components/Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
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
  
    );
  }
}

export default App;
