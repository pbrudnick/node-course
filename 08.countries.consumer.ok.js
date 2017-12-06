const countryInfo = require("./solved/country-info");

const code = "AR";
countryInfo.getCountryInfo(code, (err, data) => {
  console.log(`la data para ${code} es ${JSON.stringify(data)}`);
});