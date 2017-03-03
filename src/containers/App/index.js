import React, { Component, PropTypes } from 'react';

import '../../assets/styles/main.scss';

import classNames from 'classnames/bind';

const styles = require('./styles');

const cn = classNames.bind(styles);

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  onClick(e) {
    alert('hello');
  }

  render () {
    return (
      <div className={ cn('container') }>
        <div className={ cn('logo') }></div>
        <button onClick = { ::this.onClick }> test </button>
      </div>
    )
  }
}
