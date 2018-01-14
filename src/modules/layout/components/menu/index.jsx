import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-toolbox';
import style from './style.scss';

import Link from '../link';

const getLink = (url, type) => {
  const key = url + type;
  const props = { key, url };

  switch (url) {
    case '/actions':
      props.label = 'Actions';
      props.icon = 'person';
      break;
    default:
      props.label = 'Home';
      props.icon = 'inbox';
  }

  return <Link {...props} />;
};

const Menu = ({ type, routes }) => (
  <Navigation type={type} className={style[type]}>
    {routes.map(({ path }) => getLink(path, type))}
  </Navigation>
);

Menu.propTypes = {
  type: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Menu.defaultProps = {
  type: 'vertical',
  routes: [],
};

export default Menu;
