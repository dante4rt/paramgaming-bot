require('dotenv').config();
require('colors');
const { login } = require('./login');
const { getTasks } = require('./tasks');

(async () => {
  try {
    const accessToken = await login();
    if (accessToken) {
      await getTasks(accessToken);
    } else {
      console.log('Login failed. Unable to retrieve access token.'.red);
    }
  } catch (error) {
    console.log('Error in IIFE:'.red, error);
  }
})();
