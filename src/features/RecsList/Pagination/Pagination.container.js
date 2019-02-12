import React, { Component } from 'react';
import { connect } from 'react-redux';
import { range } from 'lodash';
import queryString from 'query-string';

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

  createPaginationPages = () => {
    const { currentPage, totalPages } = this.props.recs.data;
    const { LEFT, RIGHT } = PAGINATION;
    const maxPaginationBlocks = 7;
    let pagesRange;
    if (totalPages <= maxPaginationBlocks) {
      pagesRange = range(1, totalPages + 1)
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);
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
    const { currentPage, totalPages } = this.props.recs.data;
    const { LEFT, RIGHT } = PAGINATION;
    const parsed = queryString.parse(window.location.search);
    if (countPage === LEFT) {
      parsed.page = Math.min(1, currentPage - 3);;
    } else if (countPage === RIGHT) {
      parsed.page = Math.min(totalPages, currentPage + 3);
    } else {
      parsed.page = countPage;
    }
    return queryString.stringify(parsed);
  }

  render() { 
    const { currentPage } = this.props.recs.data;
    return ( 
      <Pagination 
        pages={this.state.pages} 
        currentPage={currentPage}
      />
     );
  }
}

const mapStateToProps = state => ({
  recs: getRecs(state)
})

export default connect(mapStateToProps, null)(PaginationContainer);