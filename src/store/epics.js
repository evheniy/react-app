import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const epic$ = new BehaviorSubject(combineEpics());

const rootEpic = (action$, store) => epic$.mergeMap(epic => epic(action$, store));

export const epicMiddleware = createEpicMiddleware(rootEpic);

export const injectAsyncEpic = asyncEpic$ => epic$.next(asyncEpic$);
