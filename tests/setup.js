global.requestAnimationFrame = global.requestAnimationFrame || function (cb) { // eslint-disable-line
  return setTimeout(cb, 0);
};

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
