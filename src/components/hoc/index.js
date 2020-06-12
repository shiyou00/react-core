import React from "react";
import Comb from "./comb";
import Input from "./input";

function Hoc() {
  const validatorName = {
    func: (val) => val && val.length > 2,
    msg : "名字必须大于2位"
  }

  return (
    <div className="App">
      {/*<Comb title={"标题"} />*/}
      <Input validator={validatorName} onChange={(val)=>{console.log(val)}} />
    </div>
  );
}

export default Hoc;
