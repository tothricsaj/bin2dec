import React from 'react';
import Bin2dec from './service/Bin2dec.js'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {binary: 0}
    this.handleInput = this.handleInput.bind(this)
    this.convertBinary = this.convertBinary.bind(this)
  }

  handleInput(event) {
    this.setState({binary: event.target.value})
  }

  convertBinary() {
    this.setState({binary: Bin2dec(this.state.binary)})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.handleInput} />
          <div onClick={this.convertBinary}>Convert</div>
        </form>

        <p>{this.state.binary}</p>
      </div>
    );
  }
}

export default App;
