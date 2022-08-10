if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React from 'react';

import App from './src/app';

export default function index() {
  return <App />;
}
