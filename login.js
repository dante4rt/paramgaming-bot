const axios = require('axios');

async function login() {
  try {
    const { data } = await axios({
      url: 'https://paramgaming.com/api/v1/user/login',
      method: 'POST',
      data: {
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD,
      },
    });

    return data.user.token;
  } catch (error) {
    console.log('Error in login: '.red, error.response.data.message);
  }
}

module.exports = { login };
