import React from 'react'

class StateDemo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      index: 0
    }
  }

  componentDidMount() {
    // console.log('SetState调用setState');
    // this.setState({
    //   index: this.state.index + 1
    // })
    // console.log('state', this.state.index);
    //
    // console.log('SetState调用setState');
    // this.setState({
    //   index: this.state.index + 1
    // })
    // console.log('state', this.state.index);

    // setTimeout(()=>{
    //   console.log('SetState调用setState');
    //   this.setState({
    //     index: this.state.index + 1
    //   })
    //   console.log('state', this.state.index); // 1
    //
    //   console.log('SetState调用setState');
    //   this.setState({
    //     index: this.state.index + 1
    //   })
    //   console.log('state', this.state.index); // 2
    // },0);

    // document.body.addEventListener('click', this.bodyClickHandler)

    console.log('SetState传入函数');

    this.setState((state, props) => ({
      index: state.index + 1
    }));

    console.log('state', this.state.index);

    console.log('SetState传入函数');

    this.setState((state, props) => ({
      index: state.index + 1
    }));

    console.log('state', this.state.index);

    setTimeout(()=>{
      console.log('state', this.state.index);
    },0);
  }

  bodyClickHandler = ()=>{
    console.log('原生事件中调用setState');

    this.setState({
      count: this.state.count + 1
    })

    console.log('count', this.state.count); // 1

    console.log('原生事件中调用setState');

    this.setState({
      count: this.state.count + 1
    })

    console.log('count', this.state.count); // 2
  }

  add = ()=>{
    // console.log('合成事件中调用setState');
    //
    // this.setState({
    //   count: this.state.count + 1
    // })
    //
    // console.log('count', this.state.count); // 0
    //
    // console.log('合成事件中调用setState');
    //
    // this.setState({
    //   count: this.state.count + 1
    // })
    //
    // console.log('count', this.state.count); // 0

    // this.state.count++;
    // this.setState({
    //   count: this.state.count
    // })
  }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.add}>增加</button>
    </div>
  }
}

export default StateDemo
