import React, { Component } from 'react';
import styles from './step-card.module.scss';
import FontBold from '../fonts/font-bold';
import FontRegular from '../fonts/font-regular';
import StepImageSelector from '../step-image-selector';

export default class StepCard extends Component {
  render() {
    const { step, number, ...otherProps } = this.props;
    return (
      <div className={styles.stepCard} {...otherProps}>
        <StepImageSelector step={step} className={styles.image} />
        <FontBold className={styles.heading}>{`STEP ${number}:`}</FontBold>
        <FontRegular className={styles.type}>{step.label}</FontRegular>
        {step.subSteps.map((s, index) => {
          return (
            <FontRegular
              key={index}
              fontFamily="Arial-Regular"
              className={styles.subSteps}
            >
              {s}
            </FontRegular>
          );
        })}
      </div>
    );
  }
}
