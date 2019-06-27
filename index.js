import React, { Component } from 'react';
import { render } from 'react-dom';
import Quiz from './Quiz.jsx';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div style={{ backgroundColor: "#ECECEC", height: "100vh", fontFamily: "Verdana" }}>
        <div style={{textAlign:"center", padding: "2%", fontSize: "20px"}}>Welcome to Technical Thursday</div>
        <Quiz/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
