import React from 'react';
import InputForm from "./InputForm/InputForm";
import ImageBox from "./ImageBox/ImageBox";
import UserGreeting from "./UserGreeting/UserGreeting";
import "./Content.css";

const Content = ({onInputChange, onButtonSubmit, url}) => {
  return (
    <main className="main-content ">
      <UserGreeting />
      <InputForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <ImageBox url={url}/>
    </main>
  );
}

export default Content;
