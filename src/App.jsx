import React, { Component } from 'react';
import TargetText from './TargetText.jsx'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      targetText: '',
      currentText: ''
    }
  }

  render() {
    return (
      <div className="App">
        <TargetText />
        <label>
          Type here:
          <textarea
            value={this.state.currentText}
            onChange={e => this.setState({ currentText: e.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default App;
