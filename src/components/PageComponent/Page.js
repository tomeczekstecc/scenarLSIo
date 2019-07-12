import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";
import PageButton from "./PageButton";
import PageImage from "./PageImage";

class Page extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render(props) {
    const { id, title, content, img } = this.props.item;

    return (
      <div className="m-4">
        <PageTitle id={id} title={title} />
        <PageContent content={content} />
        <PageImage img={img} />
        <PageButton />
      </div>
    );
  }
}

export default Page;
