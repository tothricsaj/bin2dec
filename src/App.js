import React from 'react';
import Bin2dec from './service/Bin2dec.js'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dec: 0,
      binary: 0,
      validValue: true,
    }
    this.handleInput = this.handleInput.bind(this)
    this.convertBinary = this.convertBinary.bind(this)
  }

  handleInput(event) {
    let regex = /[a-zA-Z2-9]/g
    if(regex.test(event.target.value)) {
      this.setState({...this.state, validValue: false, binary: event.target.value})
    } else {
      this.setState({binary: event.target.value, validValue: true})
    }
  }

  convertBinary() {
    this.setState({...this.state, dec: Bin2dec(this.state.binary)})
  }

  render() {
    return (
      <div className="App">
        <h2>Convert binary to decimal</h2>
        <form>
          <input type="text" onChange={this.handleInput} />

          
          {
            this.state.validValue
            ? <div className="ConvertButton" onClick={this.convertBinary}>Convert</div>  
            : <p>Type properly value</p>
          }
        </form>

        <p>{this.state.dec}</p>
        <p>{typeof this.state.binary}</p>
      </div>
    );
  }
}

export default App;
