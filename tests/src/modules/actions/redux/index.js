import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import * as constants from '../../../../../src/modules/actions/constants';
import reducer from '../../../../../src/modules/actions/reducers';

chai.use(dirtyChai);

describe('Testing actions reducer', () => {
  it('should test default state', () => {
    const state = reducer(undefined, { type: 'test' });

    expect(state.status).to.exist();
    expect(state.status).to.be.equal('null');
  });

  it('should test ACTIONS_INIT action', () => {
    const state = reducer(undefined, { type: constants.ACTIONS_INIT });

    expect(state.status).to.exist();
    expect(state.status).to.be.equal('init');
  });

  it('should test ACTIONS_IDLE action', () => {
    const state = reducer(undefined, { type: constants.ACTIONS_IDLE });

    expect(state.status).to.exist();
    expect(state.status).to.be.equal('idle');
  });

  it('should test ACTIONS_CLEAR action', () => {
    const state = reducer(undefined, { type: constants.ACTIONS_CLEAR });

    expect(state.status).to.exist();
    expect(state.status).to.be.equal('null');
  });

  it('should test default state with value', () => {
    const state = reducer({ test: true }, { type: 'test' });

    expect(state.test).to.exist();
    expect(state.test).to.be.true();

    expect(state.status).to.not.exist();
  });
});
