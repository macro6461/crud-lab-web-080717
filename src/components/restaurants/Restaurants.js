import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    debugger
    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant store={this.props.store} key={index} restaurant={restaurant} />
    })
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
