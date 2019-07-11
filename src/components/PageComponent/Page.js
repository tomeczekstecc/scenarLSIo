import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";
import PageButton from "./PageButton";
import PageImage from "./PageImage";
import PagesData from "../../data/data";

class Page extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick = (id, title, content,img) => {
    const newPage = {
      id,
      title,
      content,
      img
    };
    PagesData.push(newPage)
  };

  render(props) {
    const { id, title, content, img } = this.props.item;
console.log(PagesData)
    return (
      <div className="m-4">
        <PageTitle id={id} title={title} />
        <PageContent content={content} />
        <PageImage imgUrl={img} />
        <PageButton onClick={this.handleClick(3,'trzeci','blabla','/.//')} />
      </div>
    );
  }
}

export default Page;
