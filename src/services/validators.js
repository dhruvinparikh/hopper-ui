import {ethers} from 'ethers';

const required = value => value ? undefined : 'Required';

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;

const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

const minValue18 = minValue(18);

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?  'Invalid email address' : undefined;

const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined;

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
    
const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined;

const isAddress = value => {
  try {
    ethers.utils.getAddress(value);
  } catch (e) { 
    return 'not a valid ethereum address'; 
  }
  return undefined;
};

export { required, maxLength, maxLength15, number, minValue, minValue18, email, tooOld, alphaNumeric, phoneNumber, isAddress };
