import React from 'react';
import InputForm from "./InputForm/InputForm";
import ImageBox from "./ImageBox/ImageBox";
import "./Content.css";

const Content = () => {
  return (
    <main className="main-content">
      <InputForm />
      <ImageBox />
    </main>
  )
}

export default Content;
