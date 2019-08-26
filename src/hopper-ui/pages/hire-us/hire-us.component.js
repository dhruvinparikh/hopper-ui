import React, { Component } from 'react';
import styles from './hire-us.module.scss';
import FontBold from '../../../components/hopper-ui/fonts/font-bold';
import FontRegular from '../../../components/hopper-ui/fonts/font-regular';

export default class HireUS extends Component {
  render() {
    return (
      <div className={styles.hireUS}>
        <FontBold className={styles.heading}>Hire Us!</FontBold>
        <FontRegular className={styles.subHeading}>
          Are you working on blockchain project? Are you working ZKP project?
        </FontRegular>
        <FontRegular className={styles.last} >We are a bunch of developers. ...</FontRegular>
      </div>
    );
  }
}
