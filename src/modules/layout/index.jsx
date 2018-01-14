import { injectReducer, injectEpic } from 'wpb/lib/store';
import Container from './containers';
import reducers from './reducers';
import epics from './epics';
import { LAYOUT } from './constants';

injectReducer(LAYOUT, reducers);
injectEpic(epics);

export default Container;
