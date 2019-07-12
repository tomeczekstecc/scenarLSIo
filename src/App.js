import React, { Fragment } from "react";
// eslint-disable-next-line
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PagesData: [
        {
          id: 1,
          title: "My first1 scene",
          content:
            "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam qui voluptas quae sit accusamus, ut facere a reprehenderit, maxime saepe, quasi expedita ullam ipsa eveniet facilis? Enim unde sed dolores in? Tempora suscipit repellendus eligendi voluptates perspiciatis, ipsa obcaecati quia corrupti architecto nisi a quod consectetur similique ratione soluta labore culpa sunt quos accusamus alias officia nesciunt? A commodi sequi iure expedita ipsa dolor velit incidunt, veritatis fugiat nam?",
          img: "./test_image.jpg"
        },
        {
          id: 2,
          title: "My second2 scene",
          content:
            "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam qui voluptas quae sit accusamus, ut facere a reprehenderit, maxime saepe, quasi expedita ullam ipsa eveniet facilis? Enim unde sed dolores in? Tempora suscipit repellendus eligendi voluptates perspiciatis, ipsa obcaecati quia corrupti architecto nisi a quod consectetur similique ratione soluta labore culpa sunt quos accusamus alias officia nesciunt? A commodi sequi iure expedita ipsa dolor velit incidunt, veritatis fugiat nam?",
          img: './test_image.jpg'
        },
        {
          id: 3,
          title: "My third scene",
          content:
            "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam qui voluptas quae sit accusamus, ut facere a reprehenderit, maxime saepe, quasi expedita ullam ipsa eveniet facilis? Enim unde sed dolores in? Tempora suscipit repellendus eligendi voluptates perspiciatis, ipsa obcaecati quia corrupti architecto nisi a quod consectetur similique ratione soluta labore culpa sunt quos accusamus alias officia nesciunt? A commodi sequi iure expedita ipsa dolor velit incidunt, veritatis fugiat nam?",
          img: "./test_image.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <Fragment>
        <Nav />
        <MainContent pagesData={this.state.PagesData}/>
      </Fragment>
    );
  }
}

export default App;
