import React from 'react';
import { bool, node, string } from 'prop-types';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';

const LaddaButtonWrapper = ({ loading, additionalClasses, children, ...props }) => (
  <LaddaButton 
    loading={loading}
    disabled={loading} 
    type='button'
    data-style={EXPAND_RIGHT}
    data-spinner-color='#fff'
    className={`btn ${additionalClasses}`}
    {...props}
  >
    {children}
  </LaddaButton>
)

LaddaButtonWrapper.propTypes = {
  loading: bool,
  children: node,
  additionalClasses: string
}

LaddaButtonWrapper.defaultProps = {
  loading: false
};

export default LaddaButtonWrapper;
