import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

function reducer (state = 0, {type}) {
  switch(type) {
    case 'INCREMENT':
      return state += 1;
    case 'DECREMENT':
      return state -= 1;
    default:
      return state;
  }
}

const store = createStore(reducer, 0)

const render = () => ReactDOM.render(
  <App
    incrementState={() => store.dispatch({
      type: 'INCREMENT'
    })}
    decrementState={() => store.dispatch({
      type: 'DECREMENT'
    })}
    count={store.getState()}
  />,
  document.getElementById('root')
);

store.subscribe(render);
render()
