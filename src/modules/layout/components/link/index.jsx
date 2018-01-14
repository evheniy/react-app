import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-toolbox';
import { NavLink } from 'react-router-dom';
import style from './style.scss';

const Link = ({ url, label, icon }) => (
  <NavLink
    exact
    to={url}
    className={style.link}
    activeClassName={style.selected}
  >
    <Button
      icon={icon}
      label={label}
      flat
    />
  </NavLink>
);

Link.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Link.defaultProps = {
  url: '/',
  icon: 'inbox',
};

export default Link;
