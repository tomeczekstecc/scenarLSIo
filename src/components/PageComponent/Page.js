import React, { Component } from "react";
import PageTitle from "./PageTitle";
import PageContent from "./PageContent";
import PageButton from "./PageButton";
import PageImage from "./PageImage";

export class Page extends Component {
  render() {
    return (
      <div className="m-4">
        <PageTitle />
        <PageContent />
        <PageImage />
        <PageButton />
      </div>
    );
  }
}

export default Page;
