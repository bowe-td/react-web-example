import axios from 'axios';
import { getToken } from './auth';

const { REACT_APP_API } = process.env;

export const UnauthenticatedHttpClient = () => {
  return axios.create({
    baseURL: REACT_APP_API,
  });
};

export const AuthenticatedHttpClient = () => {
  const api = axios.create({
    baseURL: REACT_APP_API,
  });

  api.interceptors.request.use(async config => {
    const token = getToken();

    let configWithHeaders = {};

    if (token) {
      configWithHeaders = {
        headers: {
          Authorization: token,
        },
      };
    }

    return { ...config, ...configWithHeaders };
  });

  return api;
};
