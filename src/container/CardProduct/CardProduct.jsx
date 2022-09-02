import React from "react";
import { Component } from "react";

class CardProduct extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <img
          className="img-thumb-prod"
          src="https://etanee.id/static/media/tumis_jamur.6f54dec9.jpg"
          alt=""
          width="270"
        />
        <div className="card-body">
          <h4 className="card-title">Daging Ayam Bumbu Rasa Original</h4>
          <p className="card-price">Rp. 34.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>
              -
            </button>
            <input type="number" value={this.state.order} />
            <button className="plus" onClick={this.handlePlus}>
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProduct;
