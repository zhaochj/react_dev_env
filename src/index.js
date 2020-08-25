import React, { Component } from 'react'
import ReacDom from 'react-dom';

class Root extends Component {
  render() {
    return (
      <div>
        My first test.
      </div>
    )
  }
}

ReacDom.render(<Root />, document.getElementById('root'));
