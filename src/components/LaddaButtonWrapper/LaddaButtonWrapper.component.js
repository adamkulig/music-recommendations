import React from 'react';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';

const LaddaButtonWrapper = props => {
	return <LaddaButton {...props}>{props.children}</LaddaButton>;
};
 
LaddaButtonWrapper.defaultProps = {
	type: 'button',
	className: 'btn btn-primary',
	'data-style': EXPAND_RIGHT,
	'data-spinner-color': '#fff'
};

export default LaddaButtonWrapper;
