import { ACTIONS_INIT } from '../redux/constants';
import { idleActions } from '../redux/actions';

export default action$ => action$.ofType(ACTIONS_INIT).mapTo(idleActions());
