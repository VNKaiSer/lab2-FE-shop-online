const axios = require("axios");
const SETTINGS = require("./setting.json");

const Api = axios.create({
  baseURL: SETTINGS.BASE_URL,
});

module.exports = Api;
