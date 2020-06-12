import React from 'react';

function proxy(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

class general extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

export const ProxyHOC = proxy(general);


