const config = require('../config')
const BACKEND_BASE_URL = config.BACKEND_API_BASE_URL;

const BACKEND_API = {
    BASE_API_URL: `${BACKEND_BASE_URL}/api`,
    REGISTER: '/register',
    LOGIN: '/login',
    USER_EXIST: '/user-exist',
    USER: '/user',
    REFRESH_TOKEN: '/refresh-token',
    PROPERTY:'/property'
  };

  export default {BACKEND_API};