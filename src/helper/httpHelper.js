const axios = require('axios');
const { getCookie } = require('./index');

const makePostRequest = async (
  url,
  baseUrl,
  tokenCookieName,
  postBody,
  errorMessageBuilder = (res) => res,
  onProgress = () => {}
) => {
  let tokenValue = '';
  if (tokenCookieName === 'token') {
    tokenValue = getCookie('token');
  }

  let headers = {
    'Content-Type': 'application/json',
  };

  if (tokenValue) {
    const token = 'Bearer ' + tokenValue;
    headers['Authorization'] = token;
  }

  const config = {
    baseURL: baseUrl,
    headers: headers,
    onUploadProgress: (progressEvent) => {
      if (progressEvent.total) {
        let percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        onProgress(percentCompleted);
      }
    },
    timeout: 120000,
  };

  try {
    const instance = axios.create(config);
    let body = postBody;
    return await instance.post(url, body);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return getErrorResponse(
        error,
        errorMessageBuilder,
        () =>
          makePostRequest(
            url,
            baseUrl,
            tokenCookieName,
            postBody,
            errorMessageBuilder,
            onProgress
          ),
        tokenCookieName
      );
    } else {
      throw error;
    }
  }
};

const getErrorResponse = (
  error,
  errorMessageBuilder,
  retryFunction,
  tokenCookieName
) => {};

module.exports = { makePostRequest };
