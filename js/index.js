// Create a new component that displays the content of the node.
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is ReactJS!</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
