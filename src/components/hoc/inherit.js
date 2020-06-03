import React from 'react';

function inherit(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      console.log('props', this.props);
      console.log('state', this.state);
      console.log('state', this);
      return super.render();
    }
  }
}

class general extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'haha' };
  }

  render() {
    return <div>{this.props.title}</div>
  }
}

export const InheritHOC = inherit(general);


