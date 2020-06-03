import React from 'react';

function proxy(WrappedComponent) {
  return class extends React.Component {
    render() {
      console.log(this.updater);
      return (
        <>
          <div className="title">{this.props.title}</div>
          <WrappedComponent {...this.props} />
        </>
      )
    }
  }
}

class general extends React.Component {
  render() {
    return <div>{this.props.title}</div>
  }
}

export const ProxyHOC = proxy(general);


