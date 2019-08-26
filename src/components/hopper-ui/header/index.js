import React, { Component } from 'react';
import styles from './header.module.scss';

export default class Header extends Component {
  render() {
    const {...otherProps} = this.props;
    return (
      <div className={styles.header} {...otherProps} >
        {this.props.children}
      </div>
    );
  }
}
