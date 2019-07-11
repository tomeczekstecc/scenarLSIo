import React from "react";

function PageTitle({ id, title }) {
  return (
    <div>
      <h2>
        {id} {title}
      </h2>
    </div>
  );
}

export default PageTitle;
