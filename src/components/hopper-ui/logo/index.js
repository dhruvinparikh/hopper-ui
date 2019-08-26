import React, { Component } from 'react';
import styles from './logo.module.scss';

export default class Logo extends Component {
  render() {
    const { ...otherProps } = this.props;
    return <div className={styles.logo} {...otherProps} />;
  }
}
