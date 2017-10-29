import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    debugger
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_REVIEW",
      review: {
        text: this.state.text,
        restaurantId: this.props.restaurantId
      }
    })
    this.setState({
      text: ''
    })
  }

  render() {
    debugger
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="review"
            value={this.state.text}
            onChange={this.handleOnChange}/>
            <input type="submit"/>
          </form>
          <Reviews restaurantId={this.props.restaurantId} store={this.props.store}/>
      </div>
    );
  }
};

export default ReviewInput;
