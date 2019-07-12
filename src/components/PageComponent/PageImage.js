import React from "react";

function PageImage(props) {
  console.log(props.img);
  const image = props.img;
  return <img src={require(`${props.img}`)} alt="scene_image" />;
}

export default PageImage;
