import React from "react";
import './InputForm.css'

const InputForm = () => {
  return (
    <div className="">
      <p className="f3 dark-green center">{"Detect faces"}</p>
      <div className="center form br3">
        <div className="pa4 br3 shadow-5 center w-100">
          <input type="text" className="f4 pa2 w-70 center bn br3" />
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-gold br3 bn">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
