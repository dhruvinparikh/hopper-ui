
let prooverInit = false;
export const isProoverInitialized = () => prooverInit;

window.Module.onRuntimeInitialized = () => {
  console.log('Initialised Prover')
  prooverInit = true;

};
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const waitTillProoverInitialized = async () => {
  let totalSleep = 60; // wait till 60 seconds to load the file
  while(!prooverInit && totalSleep > 0){
    await sleep(1000);
    totalSleep = totalSleep - 1;
  }
}

export const proove = async (test_data) => {
  if(!isProoverInitialized()){
    console.log("Waiting for PK file to load");
    await waitTillProoverInitialized()
  }
  var mixer_prove_json = window.Module.cwrap('mixer_prove_json', 'string', ['string', 'string']);
  var result = mixer_prove_json('/mixer.pk.raw', JSON.stringify(test_data));
  return result;
};
