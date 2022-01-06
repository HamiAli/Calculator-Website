import React, { useState } from "react";

function Calculator() {
  const [state, setState] = useState("");
  
  function handle(e) {
    if(state.length<14) {
      setState(state.concat(e.target.name));
    }
    else {
      alert("MAX 14 DIGITS")
    }
  }
  const clear = () => {
    setState("");
  };
  const backspace = () => {
    setState(state.slice(0, state.length - 1));
  };
  const calculate = () => {
    try {
      setState(eval()(state).toString());
    } catch (err) {
      setState("Not Valid Num ");
    }
  };
  return (
    <>
      <div className="container">
        <form>

          <input
            type="text"
            value={state}
          ></input>
        </form>
        <div className="keypad">
          <button
            id="clear"
            className="color"
            onClick={clear}
          >
            Delete
          </button>
          <button className="Color" onClick={backspace}>
            C
          </button>

          <button onClick={handle} name="9">
            9{" "}
          </button>
          <button onClick={handle} name="8">
            8{" "}
          </button>

          <button onClick={handle} name="7">
            7{" "}
          </button>
          <button className="Color" onClick={handle} name="-">
            -
          </button>
          <button onClick={handle} name="6">
            {" "}
            6{" "}
          </button>
          <button onClick={handle} name="5">
            {" "}
            5
          </button>
          <button onClick={handle} name="4">
            4
          </button>
          <button className="Color" onClick={handle} name="/">
            {" "}
            ÷
          </button>
          <button onClick={handle} name="3">
            {" "}
            3
          </button>
          <button onClick={handle} name="2">
            {" "}
            2
          </button>
          <button onClick={handle} name="1">
            1
          </button>
          <button className="Color" onClick={handle} name="*">
            X
          </button>
          <button onClick={handle} name="0">
            0{" "}
          </button>
          <button onClick={handle} name=".">
            .
          </button>
          <button id="equal" className="Color" onClick={handle} name="+">
            +
          </button>

          <button className="Color" id="equal" onClick={calculate} name="=">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
