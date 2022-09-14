import React, { Component } from "react";
import "./LifeCycleComponent.css";

class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor :", constructor);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      // this.setState({
      //   count: 2,
      // });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.group("shouldComponentUpdate");
    // console.log(nextProps);
    console.log("nextState :", nextState);
    console.log("state :", this.state);
    console.groupEnd();
    if (nextState.count >= 4) {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // method untuk update tombol sesuai klikan kita
  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <div className="">
        <button className="btn" onClick={this.changeCount}>
          Componenet Button {this.state.count}
        </button>
      </div>
    );
  }
}

export default LifeCycleComponent;
