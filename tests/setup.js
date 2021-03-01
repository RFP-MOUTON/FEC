const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ Adapter: new Adapter() });
// This tells enzyme that we're going to be using it each time it was
