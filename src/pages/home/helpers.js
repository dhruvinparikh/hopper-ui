import {config} from '../../config';
import {ethers} from 'ethers';

export const depositHeading = `send ${ethers.utils.formatEther(config.AMOUNT)} ETH to`;
export const withdrawHeading = `claim ${ethers.utils.formatEther(config.AMOUNT)} ETH`;