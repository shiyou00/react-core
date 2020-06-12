import React from "react";

function CombProxy(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <>
          <div>{this.props.title}</div>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

class Child extends React.Component{
  render() {
    return (
      <div>child 组件</div>
    )
  }
}

export default CombProxy(Child);
