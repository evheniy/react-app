require('babel-polyfill');
require('babel-register');
require('ignore-styles');
const { configure } = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });
