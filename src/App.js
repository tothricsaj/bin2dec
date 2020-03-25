import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {binary: 0}
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    this.setState({binary: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.handleInput} />
        </form>

        <p>{this.state.binary}</p>
      </div>
    );
  }
}

export default App;
