import React, { Component } from 'react';
import './App.css';

import Headbar from './components/Headbar';
import Window from './components/Window';

class App extends Component {

  render(){
    return(
      <div>
        <Headbar/>
        <Window/>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       Poop
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
