import 'rxjs';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import { ActionsObservable } from 'redux-observable';
import * as actions from '../../../../../src/modules/actions/actions';
import initEpic from '../../../../../src/modules/actions/epics';

chai.use(dirtyChai);

describe('Testing actions epics', () => {
  it('should test initEpic', (done) => {
    const action$ = ActionsObservable.of(actions.initActions());

    const expectedOutputActions = [
      actions.idleActions(),
    ];

    initEpic(action$)
      .toArray()
      .subscribe((actualOutputActions) => {
        expect(actualOutputActions).to.be.eql(expectedOutputActions);
        done();
      });
  });
});
