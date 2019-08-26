import React,{Component} from 'react';
import InputTitle from '../input-title';
import HopperInput from '../hopper-input';
import styles from './sent-coin.module.scss';
import ButtonLG from '../buttons/button-lg';
import FlexSpaceAround from '../flex-space-around';
import FontRegular from '../fonts/font-regular';
import FontBold from '../fonts/font-bold';
import {  IconAirplane } from '../../icons';

const shortenAddress = address => `${address.slice(0, 6)}...${address.substr(address.length - 4)}`;

export default class SentCoin extends Component{
  render(){
    const {details,onDownloadSecret,onCopySecret,onStartOver,copyButton,activeInput, ...otherProps} = this.props;
    return(
      <div {...otherProps}>
        <InputTitle title = "Sent!" title2={`${details.amount} ${details.unit} to ${shortenAddress(details.withdrawer)}`}
          icon={<div><IconAirplane/></div>}/>
        <HopperInput
          disabled
          className={styles.input}
          multiline rows="5" rowsMax="5"
          value={details.secret}
          activeInput={activeInput} />
        <FlexSpaceAround className={styles.buttons} >
          <ButtonLG styles={{width:'33.33%'}} color="secondary" onClick={ (event)=> onDownloadSecret(event,details.secret)} >DOWNLOAD SECRET</ButtonLG>
          <ButtonLG  styles={{width:'33.33%'}} color="secondary" onClick={ (event) => onCopySecret(event,details.secret)} >{copyButton}</ButtonLG>
          <ButtonLG  styles={{width:'33.33%'}} color="primary" onClick={onStartOver}>START OVER</ButtonLG>
        </FlexSpaceAround>
        <FontRegular className={styles.instruction1} >
        Send this secret to the recipient.
        </FontRegular>
        <FontBold className={styles.instruction2}  >
        If the secret is lost, the ETH will be lost forever.
        </FontBold>
      </div>
    );
  }
}