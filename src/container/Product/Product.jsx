import React from "react";
import { Fragment } from "react";
import { Component } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://semuabisa.web.id/wp-content/uploads/2022/08/yellow-logo.png"
              alt="creative dev"
              width="120"
            />
          </div>
          <div className="troley">
            {/* <div className="count"></div> */}
            <span className="cart">Troley :</span> {this.state.order}
          </div>
        </div>
        <CardProduct
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
