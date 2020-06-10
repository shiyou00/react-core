import React from "react";

function SkuChild2(props) {
  console.log("SkuChild2");
  return (
    <div>
      {props.content}
    </div>
  )
}

export const MemodSkuChild = React.memo(SkuChild2,(prevProps, nextProps)=> prevProps.content===nextProps.content);

class Sku extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      content:"我是 SkuChild 组件"
    }
  }
  render() {
    console.log("Sku，渲染了~");
    return <div>
      <SkuChild content={this.state.content} />
      <MemodSkuChild content={this.state.content} />
      <span>{this.state.count}</span>
      <button onClick={this.onIncrease}>increase</button>
    </div>
  }
  onIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

class SkuChild extends React.PureComponent{

  render() {
    console.log("SkuChild 渲染了~")
    return <div>
      {this.props.content}
    </div>
  }
}


export default Sku
