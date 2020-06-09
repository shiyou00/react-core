import React from 'react'

// 创建 Context 填入默认值（任何一个 js 变量）
const ThemeContext = React.createContext('light')

// 函数式组件可以使用 Consumer
function ThemeLink (props) {
  return <ThemeContext.Consumer>
    { value => <p>link's theme is {value}</p> }
  </ThemeContext.Consumer>
}

class ThemedButton extends React.Component {
  render() {
    const theme = this.context // React 会往上找到最近的 theme Provider，然后使用它的值。
    return <div>
      <p>button's theme is {theme}</p>
    </div>
  }
}
ThemedButton.contextType = ThemeContext // 指定 contextType 读取当前的 theme context。

// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
      <ThemeLink />
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
  }
  render() {
    return <ThemeContext.Provider value={this.state.theme}>
      <Toolbar />
      <hr/>
      <button onClick={this.changeTheme}>change theme</button>
    </ThemeContext.Provider>
  }
  changeTheme = () => {
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light'
    })
  }
}

export default App
