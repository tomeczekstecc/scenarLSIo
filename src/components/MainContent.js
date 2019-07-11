import React from "react";
import ReactDom from "react-dom";
import Page from "./PageComponent/Page";
import PagesData from "../data/data";


class MainContent extends React.Component {
  constructor() {
    super();
    this.state = { pages: PagesData };
  }
  render() {

    const pages = this.state.pages.map(item =>
<Page item={item}
      />

      )

    return (
      <div>
        {pages}
      </div>

    );
    console.log(pages)
  }
}

export default MainContent;
