import React from "react";
import HelloReact from "./HelloReact";
import HelloJSX from "./HelloJSX";
import PropsDemo from "./PropsDemo";
import StateDemo from "./StateDemo"
import StateDemo1 from "./StateDemo1"
import EventDemo from "./EventDemo";
import FormDemo from "./FormDemo";
import FormDemo1 from "./FormDemo1";
import ContextDemo from "./ContextDemo";

function Core() {
  return (
    <div className="App">
      <HelloReact name={"第一个组件"}/>
      <HelloJSX name={"我是一个React元素"}/>
      <PropsDemo />
      <ContextDemo />
      <StateDemo />
      <StateDemo1 />
      <EventDemo />
      <FormDemo />
      <FormDemo1 />
    </div>
  );
}

export default Core;
