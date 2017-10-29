import React, { Component } from 'react';

class Review extends Component {


  handleDelete = () => {
    this.props.store.dispatch({
      type: "DELETE_REVIEW",
      id: this.props.review.id
    })
  }

  render() {
    debugger
    return (
      <div>
      <li>
        {this.props.review.text}
      </li>
      <button onClick={this.handleDelete}>X</button>
      </div>
    );
  }
};

export default Review;
