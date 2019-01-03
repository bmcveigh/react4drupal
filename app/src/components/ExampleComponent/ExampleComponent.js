import React, {Component} from 'react';

class ExampleComponent extends Component {

  state = {
    isOpen: false
  };

  handleClick() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    let reactContents = null;

    if (this.state.isOpen) {
      reactContents = (
        <div className={"react-contents"}>
          <h3>I am what you see when React is clicked!</h3>
        </div>
      );
    }

    return (
      <div>
        <div onClick={this.handleClick.bind(this)}>
          <h1>This is ReactJS! Click me!</h1>
        </div>
        {reactContents}
      </div>
    );
  }

}

export default ExampleComponent;
