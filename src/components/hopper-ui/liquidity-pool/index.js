import React, { Component } from 'react';
import styles from './liquidity-image.module.scss';
import FontBold from '../fonts/font-bold';
import FontRegular from '../fonts/font-regular';
import FlexSpaceAround from '../flex-space-around';
import LiquidityPoolDescription from '../liquidity-pool-description';

const LastTransactionAmount = ({ period,unit }) => {
  return (
    <FontBold className={styles.amount}>
      {period}
      <FontRegular className={styles.daysUnit}>{unit}</FontRegular>
    </FontBold>
  );
};

export default class LiquidityPool extends Component {
  render() {
    const {
      pendingTransactions,
      totalTransactions,
      lastTransaction
    } = this.props;
    return (
      <div className={styles.liquiditypool}>
        <FontBold className={styles.title}>LIQUIDITY POOL</FontBold>
        <FlexSpaceAround>
          <LiquidityPoolDescription
            amount={pendingTransactions}
            unit="pending transactions"
          />
          <LiquidityPoolDescription
            amount={totalTransactions}
            unit="total transactions"
          />
          <LiquidityPoolDescription
            amount={<LastTransactionAmount period={lastTransaction.period} unit={lastTransaction.unit} />}
            unit="last transaction"
          />
        </FlexSpaceAround>
      </div>
    );
  }
}
