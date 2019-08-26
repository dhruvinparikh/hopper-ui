import React, { Component } from 'react';
import FontBold from '../fonts/font-bold';
import styles from './liquidity-pool-description.module.scss';

export default class LiquidityPoolDescription extends Component {
  render() {
    const { amount, unit } = this.props;
    return (
      <div className={styles.description}>
        <FontBold className={styles.amount}>{amount}</FontBold>
        <FontBold className={styles.units}>{unit}</FontBold>
      </div>
    );
  }
}
