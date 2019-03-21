import React, { Component } from 'react';
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
        <textarea
          value={this.state.targetText}
          onChange={e => this.setState({ targetText: e.target.value })}
        />

        <textarea
          value={this.state.currentText}
          onChange={e => this.setState({ currentText: e.target.value })}
        />
      </div>
    );
  }
}

export default App;
