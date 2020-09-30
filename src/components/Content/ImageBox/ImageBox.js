import React from "react";
import './ImageBox.css'

const ImageBox = ({url,boxes}) => {
  // make an array of bordered divs with the coordinates of the boxes
  const boxesHtml = [];
  boxes.forEach(box => {
    let key = 0;
    boxesHtml.push(
      <div
        key={key}
        className="absolute ba faceBox"
        style={{
          border: "3px solid #137752",
          zIndex: 5,
          left: box.leftCol,
          right: box.rightCol,
          top: box.topRow,
          height: box.height,
        }}
      ></div>
      );
      key +=1;
  })

  return (
    <div className="img-box on-top w-60 center relative">
      <img id="inputImage" src={url} alt="search for faces in this" className="absolute"/>
      {boxesHtml}
    </div>
  );
};

export default ImageBox;
