import React from "react";
import './InputForm.css'

const InputForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div className="on-top">
      <p className="f3 dark-green center">{"Detect faces"}</p>
      <div className="center form w-80 br3">
        <div className="pa4 br3 shadow-5 center w-100">
          <input type="text" className="f4 pa2 w-70 center bn br3" onChange={onInputChange}/>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-gold br3 bn"
            onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
