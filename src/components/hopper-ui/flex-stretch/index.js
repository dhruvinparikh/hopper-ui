import React, { PureComponent } from 'react';
import styles from './flex-stretch.module.scss';

export default class FlexStretch extends PureComponent {
  render() {
    const { ...otherProps } = this.props;
    return (
      <div className={styles.flexStretch} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}
