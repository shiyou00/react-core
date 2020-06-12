import React from "react";

class App extends React.Component{
  state = {
    count: 0
  }

  show = ()=>{
    setTimeout(()=>{
      console.log(`1秒前 count = 0，现在 count = ${this.state.count}`);
    },1000)
  }

  render() {
    return (
      <div onClick={()=>{
        this.show();
        this.setState({
          count: 5
        })
      }}>
        点击Class组件
      </div>
    );
  }
}

export default App;
