const axios = require("axios");

async function getPhoneNumbers(country, phoneNumber) {
  let axios = require("axios");

  const url = `https://jsonmock.hackerrank.com/api/countries?name=${country}`;

  const response = await axios.get(url);
  var code;
  if (response.data.data.length == 0) {
    return -1;
  } else {
    if (response.data.data[0].callingCodes.length > 1) {
      code = response.data.data[0].callingCodes[1];
    } else {
      code = response.data.data[0].callingCodes[0];
    }

    const phone = `+${code} ${phoneNumber}`;

    return phone;
  }
}
getPhoneNumbers("Afghanistan", "656445445")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
