import axios from "axios"

const PORT = 3030

export const api = axios.create({
  baseURL: `http://localhost:${PORT}`
})