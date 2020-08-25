import React from 'react'
import ReacDom from 'react-dom';


class Sub extends React.Component {
  render() {
    return (
      <div>
        Sub component.
      </div>
    )
  }
}


class Root extends React.Component {
  render() {
    return (
      <div>
        My first test.<hr />
        <Sub />
      </div>
    )
  }
}

ReacDom.render(<Root />, document.getElementById('root'));
