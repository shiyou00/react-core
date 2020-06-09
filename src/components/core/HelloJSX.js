import React from 'react';

class HelloJSX extends React.Component {
  render() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
}

export default HelloJSX;
