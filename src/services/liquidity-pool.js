import {ethers} from 'ethers';
import {config} from '../config';
import moment from 'moment';

export const getLiquidityPool = async () => {
  try {
    const provider = new ethers.providers.EtherscanProvider(
      config.PROVIDER
    );
    const transactions = await provider.getHistory(config.CONTRACT_ADDRESS);
    const balance = await provider.getBalance(config.CONTRACT_ADDRESS);
    const timeElapsed = moment(transactions[transactions.length-1].timestamp*1000).fromNow();
    const p = timeElapsed.split(' ')[0];
    const period = p === 'an' || p === 'a' ? '1' : p;
    const unit = timeElapsed.split(' ').slice(1,timeElapsed.split(' ').length).join(' ');
    const pendingTransactions = balance.div(ethers.utils.bigNumberify(config.AMOUNT)).toString();
    return {
      totalTransactions:transactions.length,
      lastTransaction:{
        period,
        unit
      },
      pendingTransactions,
    };
  }catch(e){
    return {
      totalTransactions:0,
      lastTransaction:{
        period: 0,
        unit: 'ETH'
      },
      pendingTransactions: 0,
    };
  }
};