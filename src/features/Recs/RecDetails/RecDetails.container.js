import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from 'lodash';

import { getRec } from 'state/selectors/recs.selectors';
import { fetchRec } from 'state/actions/recs.actions'

import RecItem from '../components/RecItem/RecItem.component';
import LoadingWrapper from 'components/LoadingWrapper/LoadingWrapper.component';

class RecDetailsContainer extends Component {
  async componentDidMount() {
    const { fetchRec, match } = this.props;
    fetchRec(match.params.id);
  }

  render() {
    const { intact, fetching } = this.props.rec;
    const rec = get(this.props, 'rec.data.rec', null);
    const active = intact || fetching;
    return (
      <LoadingWrapper isLoading={active}>
        <RecItem data={rec} isSingleRecPage />
      </LoadingWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  rec: getRec(state)
})

const mapDispatchToProps = {
  fetchRec
}

export default connect(mapStateToProps, mapDispatchToProps)(RecDetailsContainer);
