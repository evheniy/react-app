import { connect } from 'react-redux';
import Component from '../components';
import { initActions, clearActions } from '../actions';

const mapStateToProps = state => ({ status: state.actions.status });
const mapDispatchToProps = { initActions, clearActions };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
