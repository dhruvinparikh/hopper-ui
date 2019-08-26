import React, { Component } from 'react';
import styles from './footer.module.scss';
import FontRegular from '../fonts/font-regular';
import FontBold from '../fonts/font-bold';

export default class Footer extends Component {
  render() {
    const {...otherProps} = this.props;
    return (
      <div className={styles.footer} {...otherProps}>
        <FontRegular>{'Build with ❤ by'}</FontRegular>
        <a href="https://blockxlabs.com" target = "_blank" rel="noopener noreferrer" >
          <FontBold>{' BlockX Labs'}</FontBold>
        </a>
      </div>
    );
  }
}
