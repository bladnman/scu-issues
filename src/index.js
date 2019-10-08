import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const BaseContext = React.createContext();

class Child extends React.Component {
  static contextType = BaseContext;

  shouldComponentUpdate() {
    console.log("[Child] scu");
    return false;
  }
  render() {
    const { name } = this.context;
    return <div>Hi there {name}</div>;
  }
}
class Contexter extends React.Component {
  state = {
    name: "bob"
  };
  names = ["bob", "jim", "sally"];
  handlePress = () => {
    const nextName = this.names.shift();
    this.names.push(nextName);
    this.setState({ name: nextName });
  };
  render() {
    return (
      <BaseContext.Provider value={{ name: this.state.name }}>
        <button onClick={this.handlePress}>Change one Thing</button>
        <Child />
      </BaseContext.Provider>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Contexter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
