const axios = require("axios");

const dogApi = axios.create({
  // baseUrl: 'https://api.thedogapi.com/v1/breeds',
  baseURL:
    "https://api.thedogapi.com/v1/breeds",
  headers: {
    'x-api-key': `live_xDAfYZDCRNR7ln5HfUnhNzn97ijtqtY4ganBG3fS6V1wROaAsI3CzvTs2f6G0mBM`
  },
});

module.exports = dogApi;
