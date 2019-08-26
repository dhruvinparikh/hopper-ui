import React, { Component } from 'react';
import styles from './how-it-works.module.scss';
import FontBold from '../../../components/hopper-ui/fonts/font-bold';
import FontRegular from '../../../components/hopper-ui/fonts/font-regular';
import FlexSpaceEven from '../../../components/hopper-ui/flex-space-even';
import StepCard from '../../../components/hopper-ui/step-card';

export default class HowItWorks extends Component {
  render() {
    const { steps } = this.props;
    return (
      <div className={styles.howItWorks}>
        <FontBold className={styles.heading}>How it works</FontBold>
        <FontRegular className={styles.description}>
          Checkout the steps below
        </FontRegular>
        <FlexSpaceEven>
          {steps.map((step, index) => {
            return <StepCard step={step} number={index + 1} key={step.value} />;
          })}
        </FlexSpaceEven>
      </div>
    );
  }
}
