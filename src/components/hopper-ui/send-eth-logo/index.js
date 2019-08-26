import React, { Component } from 'react';
import styles from './logo.module.scss';

export default class SendETHLogo extends Component {
  render() {
    const { ...otherProps } = this.props;
    return <div className={styles.logo} {...otherProps} />;
  }
}
