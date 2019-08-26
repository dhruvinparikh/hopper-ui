import {config} from '../config';

const messagePool = [
  {
    text: 'invalid address',
    returnMsg:'Invalid Address.',
    displayType: 'input'
  },
  {
    text: 'ENS name not configured',
    returnMsg:'Invalid Network selected. Use ' + config.PROVIDER.toUpperCase(),
    displayType: 'snackbar'
  },
  {
    text: 'contract not deployed',
    returnMsg: 'Contract not deployed on selected network. Use ' + config.PROVIDER.toUpperCase(),
    displayType: 'snackbar'
  },
  {
    text: 'User denied transaction signature',
    returnMsg: 'User denied transaction signature.',
    displayType: 'snackbar'
  },
  {
    text:'Unexpected token u in JSON at position 0',
    returnMsg: 'Invalid secret key.',
    displayType:'input'
  },
  {text:'Unexpected token Ó in JSON at position 0',
    returnMsg: 'Invalid secret key',
    displayType:'input'
  },
  {
    text:'Failed to execute \'atob\' on \'Window\': The string to be decoded is not correctly encoded.',
    returnMsg: 'The secret is malformed.',
    displayType:'input'
  },
  {
    text: 'nullifier is spent',
    returnMsg: 'The secret key is already used.',
    displayType: 'snackbar'
  },
  {
    text:'Account is undefined.',
    returnMsg:'Enable Metamask',
    displayType:'snackbar'
  }
];

export const errorParser = (error) => {
  const errorMsgs = messagePool.filter(message => error.message.indexOf(message.text) !== -1);

  if(errorMsgs.length > 0) {
    return { msg: errorMsgs[0].returnMsg, displayType: errorMsgs[0].displayType };
  }
  else if(error.message.startsWith('Transaction',0)){
    return {msg:error.message,displayType:'snackbar'};
  }
  else
  {  return { msg: 'Unknown Error', displayType: 'snackbar' };}
};