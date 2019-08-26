import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import classnames from 'classnames';
import LiquidityPool from '../../../components/hopper-ui/liquidity-pool';
import FlexStretch from '../../../components/hopper-ui/flex-stretch';
import SendCoin from '../../../components/hopper-ui/send-coin';
import VerticleDivider from '../../../components/hopper-ui/verticle-divider';
import styles from './send-receive.module.scss';
import ClaimCoin from '../../../components/hopper-ui/claim-coin';
import SentCoin from '../../../components/hopper-ui/sent-coin';
import ClaimedCoin from '../../../components/hopper-ui/claimed-coin';
import { errorParser } from '../../../services/errorParser';
import { Sync } from '../../../components/hopper-ui/icons';
import getWeb3 from '../../../utils/getWeb3';

const LoadClaimsBtn = ({text,enabled}) => {
  return(
    <div>
      { enabled && (<div><Sync style={{display:'inline'}} />
        <div style={{ marginLeft:'6px', display:'inline'}} >
          {text}
        </div></div>)}
      {!enabled && <div>{text}</div>}
    </div>
  );
};

export default class SendReceive extends Component {
  constructor(props){
    super(props);
    this.state = {
      to:'',
      copyButtonText:'COPY SECRET TO KEYBOARD',
      secret:'',
      isSnackBarOpen:true,
      sendCoinExpanded:false,
      claimCoinExpanded:false
    };
  }

  handleToChange = (e) => {
    const {value} = e.target;
    this.setState({to:value});
  };

  handleSendToMixer = (e) => {
    e.stopPropagation();
    this.props.sendToMixer(this.state.to);
    this.props.getAndSetLiquidityPool();
  }

  handleDownloadSecret = (e,secret) => {
    e.stopPropagation();
    this.props.downloadSecret(secret);
  }

  handleCopySecret = (e,secret) => {
    e.stopPropagation();
    this.props.copySecret(secret);
    this.setState({copyButtonText:'COPIED TO CLIPBOARD'});
  }

  handleStartOver = (e) => {
    e.stopPropagation();
    this.setState({to:'',copyButtonText:'COPY SECRET TO KEYBOARD',sendCoinExpanded:false,claimCoinExpanded:false});
    this.props.clearDeposit();
    this.props.clearAll();
  }

  handleSecretChange = (e) => {
    const {value} = e.target;
    this.setState({secret:value});
  }

  handleClaimFunds = (e) => {
    e.stopPropagation();
    this.props.claimFunds(this.state.secret);
    this.props.getAndSetLiquidityPool();
  }

  handleClaimStartOver = (e) => {
    e.stopPropagation();
    this.setState({secret:'',sendCoinExpanded:false,claimCoinExpanded:false});
    this.props.clearClaimFunds();
    this.props.clearAll();
  }

  handleClose = () => {
    this.props.clearAll();
  }

  handleToFocus = () => {
    this.setState({sendCoinExpanded:true,claimCoinExpanded:false});
  }

  handleSecretFocus = () => {
    this.setState({claimCoinExpanded:true, sendCoinExpanded:false});
  }

  handleBlur = () => {
    if(this.state.to === '' && this.state.secret === '')
    {    this.setState({sendCoinExpanded:false,claimCoinExpanded:false});}
  }

  enableMetamask = async (e) => {
    e.stopPropagation();
    this.props.clearAll();
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    this.props.setAccounts(accounts);
  }

  render() {
    const {to,copyButtonText,secret,sendCoinExpanded,claimCoinExpanded} = this.state;
    const {details,deposit,success,pendingTransactions,totalTransactions,lastTransaction,claimSuccess,claimFundsBtn,isClaimFundsBtnEnabled, error,claimError} = this.props;
    const errorMsg = error === null ? null : errorParser(error);
    const claimErrorMsg = claimError === null ? null : errorParser(claimError);
    const sendCoinClassnames = classnames({
      [styles.sendCoin]:!sendCoinExpanded && !claimCoinExpanded,
      [styles.sendCoinExpanded]:sendCoinExpanded,
      [styles.sendCoinShrinked]: claimCoinExpanded
    });
    const claimCoinClassnames = classnames({
      [styles.claimCoin] : !claimCoinExpanded && !sendCoinExpanded, 
      [styles.claimCoinExpanded] : claimCoinExpanded,
      [styles.claimCoinShrinked] : sendCoinExpanded
    });
    return (
      <div className={styles.sendReceive}>
        { ( errorMsg && errorMsg.displayType === 'snackbar' ) && <Snackbar open={this.state.isSnackBarOpen}  anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }} message={errorMsg.msg !== 'Enable Metamask' ? errorMsg.msg : '' } action={[
          errorMsg.msg === 'Enable Metamask' && (<div key="metamask" className={styles.enableMetamask} onClick={this.enableMetamask} >
            {errorMsg.msg}
          </div>),
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]} /> }
        { ( claimErrorMsg && claimErrorMsg.displayType === 'snackbar' ) && <Snackbar open={this.state.isSnackBarOpen}  anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }} message={claimErrorMsg.msg !== 'Enable Metamask' ? claimErrorMsg.msg : ''} action={[
          claimErrorMsg.msg === 'Enable Metamask' && (<div key="metamask" className={styles.enableMetamask} onClick={this.enableMetamask} >
            {claimErrorMsg.msg}
          </div>),
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]} /> }
        <FlexStretch>
        </FlexStretch>
        <div className={styles.coin} >
          { !success && (<SendCoin
            activeInput={sendCoinExpanded}
            deposit={deposit}
            className={sendCoinClassnames}
            to={to}
            error={errorMsg && errorMsg.msg && errorMsg.displayType !== 'snackbar'}
            helperText={errorMsg && errorMsg.msg && errorMsg.displayType !== 'snackbar' ? errorMsg.msg : undefined}
            onToChange = {this.handleToChange}
            onSendToMixer={this.handleSendToMixer} onToFocus={this.handleToFocus} onToBlur={this.handleBlur} />)}
          {success && (<SentCoin activeInput={sendCoinExpanded} details={details}
            copyButton={copyButtonText}
            className={styles.sentCoin}
            onDownloadSecret={this.handleDownloadSecret}
            onCopySecret={this.handleCopySecret}
            onStartOver={this.handleStartOver} />)}
          { !sendCoinExpanded && !claimCoinExpanded && <VerticleDivider/>}
          {!claimSuccess && (<ClaimCoin activeInput={claimCoinExpanded} claim={deposit} className={claimCoinClassnames} secret={secret} onSecretChange={this.handleSecretChange} handleClaimFunds={this.handleClaimFunds} claimFundsBtn={<LoadClaimsBtn text={claimFundsBtn} enabled={isClaimFundsBtnEnabled} />} isClaimBtnEnabled = {isClaimFundsBtnEnabled} onSecretFocus={this.handleSecretFocus} onSecretBlur={this.handleBlur} 
            error={claimErrorMsg && claimErrorMsg.msg && claimErrorMsg.displayType !== 'snackbar'}
            helperText={claimErrorMsg && claimErrorMsg.msg && claimErrorMsg.displayType !== 'snackbar' ? claimErrorMsg.msg : undefined} />)}
          {claimSuccess && (<ClaimedCoin activeInput={claimCoinExpanded} className={styles.claimedCoin} onStartOver={this.handleClaimStartOver} />)}
        </div>
        <LiquidityPool
          pendingTransactions={pendingTransactions}
          totalTransactions={totalTransactions}
          lastTransaction={lastTransaction}
        />
      </div>
    );
  }
}