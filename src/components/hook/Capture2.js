import React from "react";

function App(){
  const [count , setCount] = React.useState(0);

  const lastCount = React.useRef(count);


  const show = ()=>{
    setTimeout(()=>{
      console.log(`1秒前 count = 0，现在 count = ${lastCount.current}`);
    },1000)
  }

  return (
    <div onClick={()=>{
      show();
      lastCount.current = 5;
      setCount(5);
    }}>
      点击函数组件（useRef）
    </div>
  );
}

export default App;
