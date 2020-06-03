import React from 'react';
import HelloMessage from "./components/hello/HelloMessage";

function App() {
  return (
    <div className="App">
    {/* 第一个组件 */}
    <HelloMessage name={"第一个组件"}/>
    </div>
  );
}

export default App;
