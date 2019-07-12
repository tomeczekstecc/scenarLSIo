import React from "react";
import Page from "./PageComponent/Page";


class MainContent extends React.Component {
  constructor(props) {
    super();
    this.state = { props };
    console.log(props);
  }

  render() {
    const pages = this.state.props.pagesData.map(item => <Page item={item} key={item.id} />);

    return <div>{pages}</div>;

  }

}

export default MainContent;
