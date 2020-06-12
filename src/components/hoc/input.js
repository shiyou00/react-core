import React from "react";

function proxyHoc(WrappedComponent){
  return class extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        value:"",
        error:""
      }
    }
    onChange = (event)=>{
      const {onChange,validator} = this.props;

      if(validator && typeof validator.func === 'function'){
        if(validator.func(event.target.value)){
          this.setState({
            error : ""
          })
        }else{
          this.setState({
            error : validator.msg
          })
        }
      }
      this.setState({
        value: event.target.value
      },()=>{
        if(typeof onChange === 'function'){
          onChange(this.state.value);
        }
      })
    }
    render(){
      const newProps = {
        value: this.state.value,
        onChange: this.onChange
      }
      const props = Object.assign({},this.props,newProps);
      return (
        <>
          <WrappedComponent {...props} />
          <div>{this.state.error}</div>
        </>
      )
    }
  }
}

class HOC extends React.Component{
  render() {
    return <input {...this.props} />
  }
}

export default proxyHoc(HOC);
