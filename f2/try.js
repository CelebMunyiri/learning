
const axios=require('axios');

async function getAuthToken() {
    try {
      const authResponse = await axios.post('https://internalerpapi-staging.nathanerp.dev/auth/login', {
        email: 'dennis.m@nathandigital.com',
        password: 'Admin@123',
        type: 'CREDENTIAL',
        otp: '',
        checkEmail: false
      });
      console.log(authResponse.data.token)
      return authResponse.token;
    } catch (error) {
      //console.error('Error getting authentication token from ERP', error);
      throw new Error('Failed to get authentication token from ERP');
    }
  }

  getAuthToken()