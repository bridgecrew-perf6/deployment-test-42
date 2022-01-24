const env = process.env.REACT_APP_ENV;
console.log(process.env);
console.log(process.env.REACT_APP_ENV);
let config = {
  baseURL: "http://localhost-default/"
}

switch(env.toUpperCase()) {
  case "STAGE":
    config.baseURL = "http://stage.skillsunion.com"
    break;
  case "PRODUCTION":
    config.baseURL = "http://skillsunion.com"
    break;
  default:
    config.baseURL = "http://localhost/";
}

export default config;
