import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';
import './styles/index.scss';
import './i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
