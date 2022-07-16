const axios = require('axios').default;

async function httpGetIndex() {
    axios.get('stocks/^GSPC')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    const data = response.data;
    return data;
  })
  .catch(function (error) {
    console.log(error);
    return error
  })
}

function loadNewsDB(){
  axios.get('news/db/demo')
  .then(function (response) {
    console.log(response.result[0])
  })
}


export {httpGetIndex,loadNewsDB};