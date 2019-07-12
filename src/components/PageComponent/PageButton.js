import React from "react";
import PagesData from "../../data/data";

function PageButton() {


  function handleClick(id = 9, title = 'default_titlee', content = 'default_content', img = 'gsdf') {
  const newPage = {
    id,
    title,
    content,
    img
  };
    console.log(newPage)
  PagesData.push(newPage)


  }

  return (
    <div>
      <button onClick={handleClick}  className="btn btn-info btn-sm m-3">DODAJ SCENĘ</button>
      <hr />
    </div>
  );
}

export default PageButton;
