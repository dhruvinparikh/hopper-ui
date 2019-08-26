import React,{Component} from 'react';
import InputTitle from '../input-title';
import HopperInput from '../hopper-input';
import styles from './claim-coin.module.scss';
import ButtonMD from '../buttons/button-md';
import {  IconHandHoldingUsd } from '../../icons';
import ButtonLG from '../buttons/button-lg';

export default class ClaimCoin extends Component{
  render(){
    const {claim,secret,onSecretChange,handleClaimFunds,claimFundsBtn,isClaimBtnEnabled,onSecretFocus,onSecretBlur,error,helperText,activeInput, ...otherProps} = this.props;
    return(
      <div {...otherProps}>
        <InputTitle title = "Claim" title2={`${claim.amount} ${claim.unit}`}
          icon={<div><IconHandHoldingUsd/></div>}/>
        <HopperInput multiline rows="5" variant="outlined" rowsMax="5" className={styles.input} placeholder="Enter the secret shared by the sender ..." value={secret} onChange={onSecretChange} onFocus={onSecretFocus} onBlur={onSecretBlur} error={error} helperText={helperText} activeInput={activeInput}/>
        <div className = {styles.button} >{!isClaimBtnEnabled ? ( <ButtonMD color="secondary"  onClick={handleClaimFunds}>{claimFundsBtn}</ButtonMD>) : 
          (<ButtonLG color="secondary"  onClick={handleClaimFunds} disabled={true} >{claimFundsBtn}</ButtonLG>)}</div>
      </div>
    );
  }
}