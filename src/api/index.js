import axios from 'axios'

export default () => {
  return axios.create({
    // [todo] get base url from environment variable
    baseURL: `http://parking-garage.test/api`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
}
