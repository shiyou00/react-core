import React from "react";

function App(){
  const [count , setCount] = React.useState(0);

  const show = ()=>{
    setTimeout(()=>{
      console.log(`1秒前 count = 0，现在 count = ${count}`);
    },1000)
  }

  return (
    <div onClick={()=>{
      show();
      setCount(5);
    }}>
      点击函数组件
    </div>
  );
}

export default App;
