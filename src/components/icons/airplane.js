import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';

const IconPaperPlane = props => (
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
      icon={faPaperPlane}
      style={{
        color: '#33A5AE',
        opacity: 1,
        fontSize: 70,
      }}
    />
  </div>
);

export default IconPaperPlane;