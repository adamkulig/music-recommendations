import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import routes from 'variables/routes';
import { PAGINATION } from 'variables/recs';

const PaginationComponent = ({ pages, currentPage }) => {
  const { LEFT, RIGHT } = PAGINATION;
  return ( 
    <Pagination className='d-flex justify-content-center'>
      {pages.map(page => (
        <PaginationItem 
          key={page.count} 
          active={page.count === currentPage}
        >
          <PaginationLink 
            tag={Link}
            previous={page.count === LEFT}
            next={page.count === RIGHT}
            to={{
              pathname: routes.Recs,
              search: page.query
            }}
          >
            {page.count === LEFT || page.count === RIGHT ? null : page.count}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination> 
  );
}
 
export default PaginationComponent;
