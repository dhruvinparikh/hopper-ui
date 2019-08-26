import React, { PureComponent } from 'react';
import styles from './flex-space-even.module.scss';

export default class FlexSpaceEven extends PureComponent {
  render() {
    const { ...otherProps } = this.props;
    return (
      <div className={styles.spaceEven} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}
