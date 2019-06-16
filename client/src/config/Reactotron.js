import Reactotron, { trackGlobalErrors } from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

export default Reactotron.configure({ name: 'Auto1' }) // we can use plugins here -- more on this later
  .use(reactotronRedux()) // redux plugin
  .use(trackGlobalErrors({ offline: false }))
  .connect(); // let's connect!

// Totally hacky, but this allows you to not import reactotron-react-js
// on every file.  This is just DEV mode, so no big deal.
if (process.env.NODE_ENV === 'development') {
  console.tron = Reactotron;
}
