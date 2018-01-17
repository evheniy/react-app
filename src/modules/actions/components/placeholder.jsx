import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';
import 'react-placeholder/lib/reactPlaceholder.css';

const Placeholder = ({ ready }) => (
  <ReactPlaceholder type="text" rows={5} showLoadingAnimation ready={ready}>
    <div />
  </ReactPlaceholder>
);

Placeholder.propTypes = {
  ready: PropTypes.bool,
};

Placeholder.defaultProps = {
  ready: false,
};

export default Placeholder;
