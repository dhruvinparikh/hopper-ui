import React, { Component } from 'react';
import RootRouter from './router/root-router.container';

class Root extends Component {
  render() {
    return (
      <div>
        <RootRouter />
      </div>
    );
  }
}

Root.displayName = 'Root';

export default Root;
