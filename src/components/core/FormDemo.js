import React from 'react'

class FormDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'frank'
    }
  }
  render() {
    return <div>
        <p>{this.state.name}</p>
        <input id="inputName" value={this.state.name} onChange={this.onInputChange}/>
    </div>
  }
  onInputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
}

export default FormDemo
