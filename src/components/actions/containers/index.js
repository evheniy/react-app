import { connect } from 'react-redux';
import Component from '../components';
import { initActions, clearActions } from '../redux/actions';

const mapStateToProps = state => ({ status: state.actions.status });
const mapDispatchToProps = { initActions, clearActions };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
