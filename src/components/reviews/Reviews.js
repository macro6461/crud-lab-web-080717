import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger
      const restReviews = this.props.store.getState().reviews.filter((review) => {
        return review.restaurantId === this.props.restaurantId
      })

      const allReviews = restReviews.map((review, index) => {
        return <Review key={index} review={review} store={this.props.store} />
      })

    return (
      <ul>
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;
