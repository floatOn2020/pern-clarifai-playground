import React from "react";

const ImageBox = ({url}) => {
  return (
    <div className="img-box on-top w-80 center relative">
      <img src={url} alt="image to search for faces in"/>
      <div className="absolute ba"
    </div>
  );
};

export default ImageBox;
