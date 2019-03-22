import React, { Component } from 'react';
import TargetTextEditor from './TargetTextEditor.jsx'
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
        <TargetTextEditor
          saveText={targetText => this.setState({ targetText })}
          currentText={this.state.currentText}
        />
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
