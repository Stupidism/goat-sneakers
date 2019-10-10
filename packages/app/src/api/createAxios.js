import Axios from 'axios'

export default () => Axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '//my-json-server.typicode.com/stupidism/goat-sneakers' 
    : 'http://localhost:5000',
});
