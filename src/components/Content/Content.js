import React from 'react';
import InputForm from "./InputForm/InputForm";
import ImageBox from "./ImageBox/ImageBox";
import UserGreeting from "./UserGreeting/UserGreeting";
import "./Content.css";

const Content = ({
  onInputChange,
  onFormSubmit,
  inputValue,
  imageUrl,
  boxes,
}) => {
  return (
    <main className="main-content ">
      <UserGreeting />
      <InputForm
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
        inputValue={inputValue}
      />
      <ImageBox url={imageUrl} boxes={boxes} />
    </main>
  );
};

export default Content;
