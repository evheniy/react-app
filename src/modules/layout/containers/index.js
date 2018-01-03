import { connect } from 'react-redux';
import Component from '../components';
import toggleDrawerAction from '../redux/actions';

const mapStateToProps = state => ({ isDrawerActive: state.layout && state.layout.isDrawerActive });
const mapDispatchToProps = { toggleDrawerAction };

export default connect(mapStateToProps, mapDispatchToProps)(Component);
