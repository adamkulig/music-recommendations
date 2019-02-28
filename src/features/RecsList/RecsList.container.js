import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';
import queryString from 'query-string';

import { getRecs } from 'state/selectors/recs.selectors';
import { fetchPage, fetchAllRecs } from 'state/actions/recs.actions';

import RecsList from './RecsList.component';
import PaginationContainer from './Pagination/Pagination.container';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';
import { RECS } from 'variables/recs';

class RecsListContainer extends Component {
  async componentDidMount() {
    await this.props.fetchAllRecs(true);
    const parsed = queryString.parse(window.location.search);
    this.props.fetchPage({
      currentPage: parsed.page ? Number(parsed.page) : 1
    })
    this.fetchDesiredPage()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location.search !== prevProps.location.search) {
      this.props.fetchAllRecs();
      const parsed = queryString.parse(this.props.location.search);
      this.props.fetchPage({
        currentPage: parsed.page ? Number(parsed.page) : 1
      })
    } 
  }

  fetchDesiredPage = () => {
    console.log('this.props :', this.props);
    const allRecs = get(this.props, 'allRecs.data.allRecs', []);
    const parsed = queryString.parse(window.location.search);
    const params = {
      currentPage: parsed.page ? Number(parsed.page) : 1
    }
    const totalRecs = allRecs.length;
    const lastRec = allRecs[params.currentPage * RECS.pageSize - RECS.pageSize];
    const totalPages = Math.ceil(totalRecs / RECS.pageSize);
    console.log('totalRecs :', totalRecs);
    console.log('lastRec :', lastRec);
    console.log('totalPages :', totalPages);
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
  recs: getRecs(state),
  allRecs: getRecs(state)
})

const mapDispatchToProps = {
  fetchPage,
  fetchAllRecs
}

export default connect(mapStateToProps, mapDispatchToProps)(RecsListContainer)
