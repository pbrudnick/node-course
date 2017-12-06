const fs = require('fs');

module.exports = {
  getCountryInfoSync(code) {
    // this is dangerous!!
    const data = JSON.parse(fs.readFileSync('/home/pbrudnick/dev/node-course/solved/country-info/countries.json', 'utf8'));
    return data.find(c => c.code === code);
  },

  getCountryInfo(code, cb) {
    fs.readFile('/home/pbrudnick/dev/node-course/solved/country-info/countries.json', 'utf8', function (err, data) {
      if (err) {
        return cb(err, null);
      }
      countriesData = JSON.parse(data);
  
      const result = countriesData.find(c => c.code === code);
      
      cb(null, result);
    });
  },

  getCountryInfo2(code) {
    const countries = require("./countries.json");
    const result = countries.find(c => c.code === code);
    console.log(result);
  },

  getCountryCodeByName(name, _fs_) {
    const fs = _fs_ || fs;
    const {promisify} = require('util'),
      readFileAsync = promisify(fs.readFile);

    return readFileAsync('/home/pbrudnick/dev/node-course/solved/country-info/countries.json', 'utf8')
      .then((data) => {
        const countries = JSON.parse(data);
        return countries.find(c => c.name === name);
      })
      .catch((err) => {
        throw err;
      });
  }
};