import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import { AppBar } from 'react-toolbox';

const Bar = ({ children, showDrawerAction, title }) => (
  <Media query="(max-width: 599px)">
    {
      matches => matches ? (
        <AppBar
          title={title}
          leftIcon="menu"
          onLeftIconClick={showDrawerAction}
        />
      ) : (
        <AppBar title={title}>
          {children}
        </AppBar>
      )
    }
  </Media>
);

Bar.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  showDrawerAction: PropTypes.func.isRequired,
};

Bar.defaultProps = {
  children: null,
};

export default Bar;
