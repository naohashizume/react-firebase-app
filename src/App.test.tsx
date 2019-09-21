import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  // ReactDOM.unmountComponentAtNode(div);
  // throw new Error('hoge'); //to check if jest catches an error
});
