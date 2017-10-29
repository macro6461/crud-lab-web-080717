import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: "DELETE_RESTAURANT",
      id: this.props.restaurant.id
    })
  }

  render() {
    debugger
    return (
      <div>
        <li>{this.props.restaurant.text}</li>
        <button onClick={() => this.handleOnClick()}>X</button>
      <ReviewInput restaurantId={this.props.restaurant.id} store={this.props.store} />
      </div>
    );
  }
};

export default Restaurant;
