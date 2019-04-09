import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import queryString from 'query-string';

import { getRecs, getAllRecs } from 'state/selectors/recs.selectors';
import { fetchPage, fetchAllRecs } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import PaginationContainer from './Pagination/Pagination.container';
import RecsFiltersContainer from './RecsFilters/RecsFilters.container';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecsListContainer extends Component {
  componentDidMount = async () => {
    await this.props.fetchAllRecs(true);
    this.fetchDesiredPage();
  }

  componentDidUpdate = async (prevProps, prevState) => {
    if (this.props.location.search !== prevProps.location.search) {
      await this.props.fetchAllRecs();
      this.fetchDesiredPage();
    }
  }

  fetchDesiredPage = () => {
    const parsed = queryString.parse(window.location.search);
    const { page, genres, band } = parsed;
    const params = {
      ...parsed,
      page: page ? Number(page) : 1,
      genres: genres ? genres.split(',') : null,
      band: band ? band.toLowerCase() : null  
    }
    this.props.fetchPage(params);
  }

  render() {
    const { intact, fetching } = this.props.allRecs;
    const desiredRecsIntact= get(this.props, 'recs.intact');
    const recs = get(this.props, 'recs.data.recs', []);
    const active = intact || fetching || desiredRecsIntact;
    return (
      <LoadingWrapper isLoading={active}>
        <RecsFiltersContainer />
        <PaginationContainer />
        <RecsList recs={recs} />
        <PaginationContainer />
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state),
  allRecs: getAllRecs(state)
})

const mapDispatchToProps = {
  fetchPage,
  fetchAllRecs
}

export default connect(mapStateToProps, mapDispatchToProps)(RecsListContainer)
