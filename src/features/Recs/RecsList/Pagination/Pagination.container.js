import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range, toString } from 'lodash';
import { parse, stringify } from 'query-string';
import { withRouter } from 'react-router';

import { getRecs } from 'state/selectors/recs.selectors';
import Pagination from './Pagination.component';
import { PAGINATION } from 'variables/recs';

class PaginationContainer extends Component {
  state = { 
    pages: []
  }

  componentDidMount() {
    this.createPaginationPages();
  }
  componentDidUpdate(prevProps) {
    const { page, totalPages } = this.props.recs.data;
    const { page: prevPage, totalPages: prevTotalPages } = prevProps.recs.data;
    if (page !== prevPage || totalPages !== prevTotalPages) {
      this.createPaginationPages();
    }
  }

  createPaginationPages = () => {
    const { page, totalPages } = this.props.recs.data;
    const { LEFT, RIGHT } = PAGINATION;
    const maxPaginationBlocks = 7;
    let pagesRange;
    if (totalPages <= maxPaginationBlocks) {
      pagesRange = range(1, totalPages + 1)
    } else {
      const startPage = Math.max(2, page - 1);
      const endPage = Math.min(totalPages - 1, page + 1);
      const centerPagesRange = range(startPage, endPage + 1);
      const hasLeftArrow = startPage > 2;
      const hasRightSpill = endPage < totalPages - 1;
      const arrowOffset = 3 - (endPage - startPage);
      if (hasLeftArrow && hasRightSpill) {
        pagesRange = [1, LEFT, ...centerPagesRange, RIGHT, totalPages]
      } else if (!hasLeftArrow && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + arrowOffset + 1);
        pagesRange = [1, ...centerPagesRange, ...extraPages, RIGHT, totalPages]
      } else if (hasLeftArrow && !hasRightSpill) {
        const extraPages = range(startPage - arrowOffset - 1, startPage - 1);
        pagesRange = [1, LEFT, ...extraPages, ...centerPagesRange, totalPages]
      } else if (!hasLeftArrow && !hasRightSpill) {
        pagesRange = range(1, totalPages + 1)
      }
    }
    const pages = pagesRange.reduce((accu, page) => {
      const query = this.createPaginationQuery(page)
      accu.push({ count: page, query })
      return accu;
    }, [])
    this.setState({
      pages
    })
  }

  createPaginationQuery = countPage => {
    const { page, totalPages } = this.props.recs.data;
    const { LEFT, RIGHT } = PAGINATION;
    const parsed = parse(window.location.search);
    let desiredPage;
    if (countPage === LEFT) {
      desiredPage = toString(Math.max(1, page - 6));
    } else if (countPage === RIGHT) {
      desiredPage = toString(Math.min(totalPages, page + 6));
    } else {
      desiredPage = toString(countPage);
    }
    const query = { ...parsed, 'page': desiredPage }
    return stringify(query);
  }

  render() { 
    const { page } = this.props.recs.data;
    return ( 
      <Pagination 
        pages={this.state.pages} 
        page={page}
      />
     );
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state)
})

const PaginationContainerWithRouter = withRouter(PaginationContainer)
export default connect(mapStateToProps, null)(PaginationContainerWithRouter);