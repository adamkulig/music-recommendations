import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import queryString from 'query-string';

import { getRecs } from 'state/selectors/recs.selectors';
import { fetchPage } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import PaginationContainer from './Pagination/Pagination.container';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  componentDidMount() {
    console.log('didmount');
    const parsed = queryString.parse(window.location.search);
    this.props.fetchPage({
      currentPage: parsed.page ? Number(parsed.page) : 1
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location.search !== prevProps.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      this.props.fetchPage({
        currentPage: parsed.page ? Number(parsed.page) : 1
      })
    } 
  }

  render() {
    const { intact, fetching } = this.props.recs;
    const recs = get(this.props, 'recs.data.recs', []);
    const active = intact || fetching;
    return (
      <LoadingWrapper isLoading={active}>
        <RecsList recs={recs}/>
        <PaginationContainer />
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state)
})

const mapDispatchToProps = {
  fetchPage
}

export default connect(mapStateToProps, mapDispatchToProps)(RecsListContainer)
