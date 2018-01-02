import { connect } from 'react-redux';
import Component from '../components';
import { initActions } from '../redux/actions';

const mapStateToProps = state => ({ status: state.actions.status });
const mapDispatchToProps = { initActions };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
