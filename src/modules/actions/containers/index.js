import { connect } from 'react-redux';
import Component from '../components';
import { initActions, clearActions } from '../actions';
import { ACTIONS } from '../constants';

const mapStateToProps = state => ({ status: state[ACTIONS].status });
const mapDispatchToProps = { initActions, clearActions };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
