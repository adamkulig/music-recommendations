import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewNew from './ReviewNew.component';
import { createReview } from '../../state/actions/createReview.actions';
import { TYPES, RATING, GENRES } from '../../variables/review.variables';

class ReviewNewContainer extends Component {
  state = {
    data: {
      type: '',
      band: '',
      album: '',
      track: '',
      genre: '',
      link: '',
      rating: '',
      text: '',
      similar: ''
    },
  }

  onChange = event => 
    this.setState({
      data: {
        ...this.state.data,
        [event.target.id]: event.target.value  
      }
    });

  onSubmit = event => {
    event.preventDefault();
    this.props.onCreateReview(this.state.data)
  }

  render() {
    return (
      <ReviewNew 
        onSubmit={this.onSubmit} 
        onChange={this.onChange}
        data={this.state.data}
        types={TYPES}
        genres={GENRES}
        rating={RATING}
      />
    );
  }
}

const mapDispatchToProps = {
  onCreateReview: createReview
}

export default connect(null, mapDispatchToProps)(ReviewNewContainer);
