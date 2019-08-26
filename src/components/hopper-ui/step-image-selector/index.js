import React, { Component } from 'react';
import sendEthImage from '../../../images/undraw_content_vbqo@2x.png';
import shareTheSecretImage from '../../../images/undraw_social_share_algy@2x.png';
import receiveEthImage from '../../../images/undraw_share_766i@2x.png';

const getImage = step => {
  switch (step.value) {
  case 'send eth':
    return (
      <img
        src={sendEthImage}
        style={{ height: '266.08px', width: '359.72px' }}
      />
    );
  case 'share the secret':
    return (
      <img
        src={shareTheSecretImage}
        style={{ height: '266.08px', width: '359.72px' }}
      />
    );
  case 'receive eth':
    return (
      <img
        src={receiveEthImage}
        style={{ height: '266.08px', width: '359.72px' }}
      />
    );
  default:
  }
};

export default class StepImageSelector extends Component {
  render() {
    const { step, ...otherProps } = this.props;
    return <div {...otherProps}>{getImage(step)}</div>;
  }
}
