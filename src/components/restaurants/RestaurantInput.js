import React, { Component } from 'react';

class RestaurantInput extends Component {

  state={
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      restaurant: {
        text: this.state.text,
        reviews: []
      }
    })
    this.setState({
      text: ''
    })
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="restaurant"
          value={this.state.text}
          onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
