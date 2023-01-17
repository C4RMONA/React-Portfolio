import React, { Component } from "react";
import ThemeContext from "../../context/ThemeContext";

class ThemeProvider extends Component {
  state = {
    theme: "light"
  };

  toggleTheme = () =>{
    this.setState(prevState => ({
      theme: prevState.theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    return (

      <ThemeContext.Provider
      value={{
        theme: this.state.theme,
        toggleTheme: this.toggleTheme
      }}
      >
      {this.props.children}
    </ThemeContext.Provider>
      );
  }
}

export default ThemeProvider;