import React,{Component} from 'react';
import InputTitle from '../input-title';
import HopperInput from '../hopper-input';
import styles from './send-coin.module.scss';
import ButtonMD from '../buttons/button-md';
import Notice from '../notice';
import {  IconAirplane } from '../../icons';
import { config } from '../../../config';


export default class SendCoin extends Component{
  render(){
    const {deposit,to,onToChange,onSendToMixer, helperText, error,onToFocus,onToBlur,activeInput, ...otherProps} = this.props;
    return(
      <div {...otherProps}>
        <InputTitle title = "Send" title2={`${deposit.amount} ${deposit.unit} to`}
          icon={<div><IconAirplane/></div>}/>
        <HopperInput placeholder={`Enter receipient's ${deposit.unit} address`} className={styles.input} value={to}
          onChange={onToChange} error={error}
          helperText={helperText} onFocus={onToFocus} onBlur={onToBlur} activeInput={activeInput}/>
        <div className={styles.button}>
          <ButtonMD  color="secondary" onClick={onSendToMixer} >SEND TO MIXER</ButtonMD>
        </div>
        <Notice
          className={styles.notice}
          text={`This will send ${deposit.amount} ${deposit.unit} to the mixer address on ${config.PROVIDER.toUpperCase()} and generate a secret code. Share the secret code with the recipient. The recipient can enter the secret code to receive the funds. Check out our FAQ for more details.`} />
      </div>
    );
  }
}