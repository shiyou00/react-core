import React from 'react'

class FormDemo1 extends React.Component {
  constructor(props) {
    super(props)
    this.content = React.createRef();
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    const { value } = this.content.current;
    console.log(value);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input ref={this.content} type="text" defaultValue="frank" />
      <button type="submit">Submit</button>
    </form>
  }
}

export default FormDemo1
