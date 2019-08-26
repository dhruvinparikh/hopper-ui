import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons/faHandHoldingUsd';

const IconHandHoldingUsd = props => (
  <div
    style={{
      marginTop: '6px',
      paddingLeft: '0px',
      display: 'flex',
      flexDirection: 'row',
      width: '50%',
    }}
    {...props}
  >
    <FontAwesomeIcon
      icon={faHandHoldingUsd}
      style={{
        color: '#33A5AE',
        opacity: 1,
        fontSize: 70,
      }}
    />
  </div>
);

export default IconHandHoldingUsd;