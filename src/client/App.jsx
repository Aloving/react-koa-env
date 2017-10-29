// @flow

import React from 'react';
import './App.css';

type Props = {
  count: string,
  incrementState: Function,
  decrementState: Function
}

function App ({count, incrementState, decrementState}: Props): React$Element<any> {
  return (
    <div>
        <button onClick={decrementState}>-</button>
        <div>{count}</div>
        <button onClick={incrementState}>+</button>
    </div>
  );
}

export default App;
