import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Window from './components/Window';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isFrameOne: true, // Initial state
    };
}

toggleFrame = () => {
  console.log('trying to toggle');
    this.setState((prevState) => ({
        isFrameOne: !prevState.isFrameOne, // Toggle state
    }));
};


  render(){
    return(
      <div>
        poop
        <Window toggleFrame={this.toggleFrame} isFrameOne={this.state.isFrameOne}/>
      </div>
    )
  }
}

export default App;
