import React, { Component } from "react";

class App extends Component {
  render() {
    let title = "Hello World";
    title = "Hi, World";
    return (
      <div>
        <h1>
          {(() => {
            if (title.length > 0) return <div>{`${title} > 0`}</div>;
            if (title.length === 0) return <div>{`${title} === 0`}</div>;
            return {};
          })()}
        </h1>
      </div>
    );
  }
}

export default App;
