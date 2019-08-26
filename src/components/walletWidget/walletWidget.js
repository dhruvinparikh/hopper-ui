import React, { useEffect } from 'react';
import { useWeb3Context } from 'web3-react';
import { config } from '../../config';

export default function walletWidget () {
  const context = useWeb3Context();
  useEffect(() => {
    context.setFirstValidConnector(['MetaMask']);
  }, []);

  if (!window.hasOwnProperty('ethereum')) { //eslint-disable-line
    return (
      <p>
        Please install an{' '}
        {/* <a href={walletLearnUrl} target='blank'> */}
          Ethereum wallet.
        {/* </a> */}
      </p>
    );
  } else if (context.active && !context.error) {
    return <p>{context.account}</p>;
  } else if (
    context.error != null &&
    context.error.code === 'UNSUPPORTED_NETWORK'
  ) {
    return <p>Please connect to the {config.PROVIDER} testnet.</p>;
  } else {
    return (
      <p
        className='button is-link is-rounded'
        role='button'
        // onClick={() => {
        //   setConnector();
        // }}
      >
        Connect wallet
      </p>
    );
  }
}
