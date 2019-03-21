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
        <label>
          Target text:
          <textarea
            value={this.state.targetText}
            onChange={e => this.setState({ targetText: e.target.value })}
          />
        </label>

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
