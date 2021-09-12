const makeRequest = (location) => {
  console.log('Initiating Request');
  return new Promise((Resolve, Reject) => {
    if(location == 'India') {
      Resolve('Intiating Request Succeded...');
    } else {
      Reject('Failed - cant accept location outside india')
    }
  });
}

const processRequest = (state) => {
  console.log('processing request intiated...');
  return new Promise((Resolve, Reject) => {
    if(state == 'TG') {
      Resolve('process Request Succeeded');
    } else {
      Reject('Failed - cant accept outside of TG')
    }
  })
}

makeRequest('India')
.then((success) => {
  console.log(success);
  return processRequest('TG');
})
.then((success) => {
  console.log(success);
})
.catch((err) => {
  console.log(err)
})