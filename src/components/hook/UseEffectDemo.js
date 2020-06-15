import React,{useState} from "react";

let _deps; // _deps 记录 useEffect 上一次的 依赖

function useEffect(callback, depArray) {
  const hasNoDeps = !depArray; // 如果 dependencies 不存在
  const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i]) // 两次的 dependencies 是否完全相等
    : true;
  /* 如果 dependencies 不存在，或者 dependencies 有变化*/
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray;
  }
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => { setCount(count + 1); }}>
        点击 UseState
      </button>
    </div>
  );
}

export default Counter;
