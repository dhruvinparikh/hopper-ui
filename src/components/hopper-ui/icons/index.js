import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync} from '@fortawesome/free-solid-svg-icons/faSync';

const Sync = props => (
  <div style={{...props.style}}
    {...props} >
    <FontAwesomeIcon icon={faSync} spin/>
  </div>
);

export {
  Sync
};