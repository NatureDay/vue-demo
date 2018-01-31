/**
 * Created by Administrator on 2018/1/25.
 */

import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://admintest.qmant.com/',
  timeout: 30 * 1000
});
instance.defaults.headers.common['Authorization'] = '';

export default {
  get (url, params) {
    return instance.get(url, params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      })
  },
  post (url, params) {
    return instance.post(url, params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      })
  }
}
