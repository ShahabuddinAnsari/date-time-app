import React from 'react';
import Keypads from './Keypads';

class StdCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
      input: [],
      lastInput: ''
    }

    this.inputHandler = this.inputHandler.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.getResult = this.getResult.bind(this);
  }

  inputHandler(event) {
    const currentInput = event.target.value;
    let input = this.state.input;
    input.push(currentInput);
    this.setState({ input, lastInput: currentInput });
  }

  resetHandler() {
    this.setState({ result: '', input: [] });
  }

  clearInput() {
    const currentInput = this.state.input;
    if (currentInput.length) {
      currentInput.pop();
    }
    this.setState({ input: currentInput });
  }

  getResult() {
    let result;
    try {
      result = eval(this.state.input.join(""));

      if(result && typeof result === "number") {
        result = result.toFixed(2);
      }

    } catch (error) {
      result = "Error";
    }

    this.setState({ result, input: [] });
  }

  render() {
     return (
      <div className="main">
        <div className="currentInput">{this.state.input ? this.state.input : ''}</div>
        <div className="result">{this.state.result}</div>
        <Keypads
          inputHandler={this.inputHandler}
          reset={this.resetHandler}
          clearInput={this.clearInput}
          clearBtnEnabled={!!this.state.input.length}
          getResult={this.getResult} />
      </div>
    );
  }
}

export default StdCalculator;
