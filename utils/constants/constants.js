const dotenv = require('dotenv');
dotenv.config();
const API_URL_SEARCH = "https://recruit.zoho.in/recruit/v2/Candidates/search";
const API_DELETED_COUNT ="https://recruit.zoho.in/recruit/v2/Candidates/deleted";
const API_URL_GET = "https://recruit.zoho.in/recruit/v2/Candidates";
const API_URL_GET_TABULAR_OLD="https://recruit.zoho.in/recruit/private/json/Candidates/getTabularRecords";
const API_CLIENT="https://recruit.zoho.in/recruit/v2/Clients";
const MONGO_CLOUD_URI = `mongodb+srv://romanmania619:${process.env.MONGO_PASSWORD}@cluster0.l5mueji.mongodb.net/Skills-Capital?retryWrites=true&w=majority`;
module.exports = { API_URL_SEARCH, API_DELETED_COUNT, API_URL_GET , API_URL_GET_TABULAR_OLD , API_CLIENT, MONGO_CLOUD_URI};
//1000.a5673c338f5d36466c0bf851f9dbe905.38b42d873f73a2ef88e2aa1889336d27