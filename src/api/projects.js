import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.PROJECTS_API_URL
})

axios.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    const message = err.response?.data || err.message
    console.error(message)
    return Promise.reject(err)
  }
)

const proposeProject = data => {
  return axios.post(`/projects/propose`, data)
}

export { proposeProject }
