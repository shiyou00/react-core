import React from 'react'

class StateDemo1 extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list:[
        {
          id:1,
          name:"a"
        },
        {
          id:2,
          name:"b"
        },
        {
          id:3,
          name:"C"
        },
      ]
    }
  }

  deletePop = ()=>{
    const newList = [...this.state.list];
    newList.pop();
    this.setState({
      list: newList
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item)=>{
              return <li key={item.id}>
                <span>{item.name}</span>
              </li>
            })
          }
        </ul>
        <button onClick={this.deletePop}>删除最后一条</button>
      </div>
    )
  }
}

export default StateDemo1
