import React, { Component } from "react";
import ThemeContext from "../../context/ThemeContext";

class ChildComponent extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <button onClick={toggleTheme}>
            {theme === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ChildComponent;