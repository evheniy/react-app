import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import * as constants from '../../../../../src/modules/actions/constants';
import * as actions from '../../../../../src/modules/actions/actions';

chai.use(dirtyChai);

describe('Testing actions actions', () => {
  it('should test initActions', () => {
    const result = actions.initActions();
    expect(result.type).to.exist();
    expect(result.type).to.be.equal(constants.ACTIONS_INIT);
  });

  it('should test idleActions', () => {
    const result = actions.idleActions();
    expect(result.type).to.exist();
    expect(result.type).to.be.equal(constants.ACTIONS_IDLE);
  });

  it('should test clearActions', () => {
    const result = actions.clearActions();
    expect(result.type).to.exist();
    expect(result.type).to.be.equal(constants.ACTIONS_CLEAR);
  });
});
