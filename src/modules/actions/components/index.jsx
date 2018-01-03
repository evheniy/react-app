import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../layout';

const component = ({status, initActions, clearActions}) => (
  <Layout>
    <div>
      <h1>State: {status}</h1>
      {status !== 'idle' && <button onClick={initActions}>Init</button>}
      {status === 'idle' && <button onClick={clearActions}>Clear</button>}
    </div>
  </Layout>
);

component.propTypes = {
  status: PropTypes.string.isRequired,
  initActions: PropTypes.func.isRequired,
  clearActions: PropTypes.func.isRequired,
};

export default component;
