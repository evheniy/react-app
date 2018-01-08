import { ACTIONS_INIT } from '../constants';
import { idleActions } from '../actions';

export default action$ => action$.ofType(ACTIONS_INIT).mapTo(idleActions());
