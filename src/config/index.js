// eslint-disable-next-line no-unused-vars
import {newabi, abi} from './abi';
const currentEnv = process.env.NODE_ENV;

// eslint-disable-next-line no-unused-vars
const dev = {
  PROVIDER: 'rinkeby',
  CONTRACT_ADDRESS:'0x1752953464472fC76b435a4645dc2A02D015ea80',
  GAS_LIMIT: '2000000',
  AMOUNT: '1000000000000000000',
  ABI: abi,
};
const prod = {
  PROVIDER: 'ropsten',
  CONTRACT_ADDRESS:'0x7Fb263c3b1C67c7980AD97a58Dd1c7c7ad40302f',
  GAS_LIMIT: '2000000',
  AMOUNT: '1000000000000000000',
  ABI: abi,
};
const uat = {
  API_HOST: 'http://uat.com:8080',

};
const qa = {
  API_HOST: 'http://qa.com:8080'
};
const staging = {
  API_HOST: 'http://staging.com:8080'
};

const config =
  currentEnv === 'production'
    ? prod
    : currentEnv === 'development'
      ? dev
      : currentEnv === 'uat'
        ? uat
        : currentEnv === 'qa'
          ? qa
          : staging;

const baseOptions = {
  url: config.API_HOST,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};



export { currentEnv, config, baseOptions };

// usage
// import {config} from './config';
// config.API_HOST
//  config.provider