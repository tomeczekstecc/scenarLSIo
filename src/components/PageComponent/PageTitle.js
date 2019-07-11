import React from "react";

function PageTitle(props) {
  return (
    <div>
      <h2>
        {props.id} {props.title}
      </h2>
    </div>
  );
}

export default PageTitle;
  