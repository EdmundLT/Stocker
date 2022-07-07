const API_URL = "http://localhost:8000";
const axios = require('axios').default;

async function httpGetIndex() {
    axios.get('http://localhost:8000/stocks/^GSPC')
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
  axios.get('http://localhost:8000/news/db/demo')
  .then(function (response) {
    console.log(response.result[0])
  })
}


export {httpGetIndex,loadNewsDB};