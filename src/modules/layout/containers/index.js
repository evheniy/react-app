import { connect } from 'react-redux';
import Component from '../components';
import { showDrawerAction, hideDrawerAction } from '../actions';
import { LAYOUT } from '../constants';

const mapStateToProps = state => ({
  isDrawerActive: state[LAYOUT].isDrawerActive,
});

const mapDispatchToProps = { showDrawerAction, hideDrawerAction };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
