import React,{Component} from 'react';
import FontBold from '../fonts/font-bold';
import ClaimedLogo from '../claimed-logo';
import ButtonMD from '../buttons/button-md';
import styles from './claimed-coin.module.scss';

export default class ClaimedCoin extends Component{
  render(){
    const {onStartOver,...otherProps} = this.props;
    return(
      <div {...otherProps}>
        <ClaimedLogo/>
        <FontBold className={styles.text} >
          Claimed!
        </FontBold>
        <ButtonMD color="primary" onClick={onStartOver} >START OVER</ButtonMD>
      </div>
    );
  }
}