import React from 'react';

class Child extends React.Component {
  render() {
    const { list } = this.props

    return <ul>{list.map((item, index) => {
      return <li key={item.id}>
        <span>{item.title}</span>
      </li>
    })}</ul>
  }
}

class Parent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: 'id-1',
          title: '标题1'
        },
        {
          id: 'id-2',
          title: '标题2'
        },
        {
          id: 'id-3',
          title: '标题3'
        }
      ]
    }
  }
  render() {
    return <Child list={this.state.list} />
  }
}

export default Parent;
