import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import * as constants from '../../../../../src/modules/actions/constants';

chai.use(dirtyChai);

describe('Testing actions constants', () => {
  it('should have ACTIONS_INIT', () => {
    expect(constants.ACTIONS_INIT).to.exist();
    expect(constants.ACTIONS_INIT).to.be.equal('ACTIONS_INIT');
  });

  it('should have ACTIONS_IDLE', () => {
    expect(constants.ACTIONS_IDLE).to.exist();
    expect(constants.ACTIONS_IDLE).to.be.equal('ACTIONS_IDLE');
  });

  it('should have ACTIONS_CLEAR', () => {
    expect(constants.ACTIONS_CLEAR).to.exist();
    expect(constants.ACTIONS_CLEAR).to.be.equal('ACTIONS_CLEAR');
  });
});
