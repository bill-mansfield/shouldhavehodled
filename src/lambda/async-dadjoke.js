// example of async handler using async-await
// https://github.com/netlify/netlify-lambda/issues/43#issuecomment-444618311

// import axios from "axios"
// export async function handler(event, context) {
//   try {
//     const response = await axios.get("https://icanhazdadjoke.com", { headers: { Accept: "application/json" } })
//     const data = response.data
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ msg: data.joke })
//     }
//   } catch (err) {
//     console.log(err) // output to netlify function log
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
//     }
//   }
// }

const rp = require('request-promise');

const requestOptions = {
  method: 'GET',
  uri: 'https://undefined/v1/cryptocurrency/listings/latest',
  qs: {
    'start': '1',
    'limit': '5000',
    'convert': 'USD'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '38b91c2b-a7d7-4a64-8dd2-c54c7adabbfa'
  },
  json: true,
  gzip: true
};

rp(requestOptions).then(response => {
  console.log('API call response:', response);
}).catch((err) => {
  console.log('API call error:', err.message);
});
