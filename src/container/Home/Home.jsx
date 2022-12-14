import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";
import Product from "../Product/Product";
import "./Home.css";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    setTimeout(() => {
      // this.setState({
      //   showComponent: false,
      // });
    }, 15000);
  }

  render() {
    return (
      <div className="container">
        <h2 className="headline">Youtube Component</h2>
        <hr />
        <div className="row">
          <YoutubeComponent
            time="6.00"
            title="Belajar ReactJS - Bagian 3"
            desc="0x ditonton, 20 menit yang lalu"
          />
          <YoutubeComponent
            time="7.12"
            title="Belajar ReactJS - Bagian 1"
            desc="2x ditonton, 2 hari yang lalu"
          />
          <YoutubeComponent
            time="3.77"
            title="Belajar ReactJS - Bagian 3"
            desc="1jt kali ditonton, 2 hari yang lalu"
          />
          <YoutubeComponent
            time="8.01"
            title="Belajar ReactJS - Bagian 2"
            desc="100x ditonton, 7 hari yang lalu"
          />
          <YoutubeComponent />
        </div>

        <h2 className="headline">Counter</h2>
        <hr />
        <Product />

        <h2 className="headline">Life Cycle Component</h2>
        <hr />
        {this.state.showComponent ? <LifeCycleComponent /> : false}
      </div>
    );
  }
}

export default Home;
