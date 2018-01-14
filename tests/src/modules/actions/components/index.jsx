import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Component from '../../../../../src/modules/actions/components';

describe('Testing actions component', () => {
  const { error } = console;

  beforeEach(() => {
    console.error = () => '';
  });

  afterEach(() => {
    console.error = error;
  });

  it('should test required property: status', () => {
    let tested = false;

    console.error = (text) => {
      expect(text).to.include(
        'Warning: Failed prop type: The prop `status` is marked as required in `Component`, but its value is `undefined`.'
      );
      tested = true;
    };

    shallow(<Component
      initActions={() => 1}
      clearActions={() => 1}
    />);

    expect(tested).to.be.true();
  });

  it('should test required property: initActions', () => {
    let tested = false;

    console.error = (text) => {
      expect(text).to.include(
        'Warning: Failed prop type: The prop `initActions` is marked as required in `Component`, but its value is `undefined`.'
      );
      tested = true;
    };

    shallow(<Component
      status="test"
      clearActions={() => 1}
    />);

    expect(tested).to.be.true();
  });

  it('should test required property: clearActions', () => {
    let tested = false;

    console.error = (text) => {
      expect(text).to.include(
        'Warning: Failed prop type: The prop `clearActions` is marked as required in `Component`, but its value is `undefined`.'
      );
      tested = true;
    };

    shallow(<Component
      status="test"
      initActions={() => 1}
    />);

    expect(tested).to.be.true();
  });

  it('should test required property: status', () => {
    const wrapper = shallow(<Component
      status="test"
      initActions={() => 1}
      clearActions={() => 1}
    />);

    expect(wrapper.find('h1').text()).to.be.equal('Status: test');
  });

  it('should test required property: status', () => {
    const wrapper = shallow(<Component
      status="test"
      initActions={() => 1}
      clearActions={() => 1}
    />);

    expect(wrapper.find('h1').text()).to.be.equal('Status: test');
  });
});
