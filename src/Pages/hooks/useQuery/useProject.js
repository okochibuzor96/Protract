import axios from 'axios'
import axiosInstance from '../../../Service/config'

// Base URL
const BASE_URL = 'http://localhost:4000';

const CRUDfunc = {
  // Create (POST)
  create: (endpoint, data) => {
    return axios.post(`${BASE_URL}/${endpoint}`, data);
  },

  // Read (GET)
  get: (endpoint,config) => {
    return axios.get(`${BASE_URL}/${endpoint}`,{config});
  },

  // Update (PUT)
  update: (endpoint, data) => {
    return axios.patch(`${BASE_URL}/${endpoint}`, data);
  },

  // Delete (DELETE)
  delete: (endpoint,data) => {
    
    return axios.delete(`${BASE_URL}/${endpoint}`);
  },
};

export default CRUDfunc;



export const addProject = (values) => {
    return axios.post('http://localhost:4000/projects', values)
}

export const getProjects = () => {
    return axios.get('http://localhost:4000/projects')
}

export const getProjectDetails = async({queryKey}) => {
    const id = queryKey[1]
    return await axios.get(`http://localhost:4000/projects/${id}`)
}
// export const getProjectDetails2 = async({queryKey}) => {
//     const id = queryKey[1]
//    const resp = await axios.get(`http://localhost:4000/projects/${id}`,{responseType: 'blob'})
//    return resp.data
// }

export const updateProjectDetails = (value) => {
    
    return axios.patch(`http://localhost:4000/projects/${value.id}`,value)
}

export const postContractors = (values) => {
    return axios.post('http://localhost:4000/contractors', values)
}

export const getContractors = () => {
    return axios.get('http://localhost:4000/contractors')
}

export const getContractorDetails = ({queryKey}) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/contractors/${id}`)
}
export const upDateContractorDetails = (value) => {
    
    return axios.patch(`http://localhost:4000/contractors/${value.id}`,value)
}
export const upDateContractorDetail = (param) => {
    
     const {route, payload} = param
    return axiosInstance.patch(`${route}`, payload)
}

export const getEvaluation = () => {
    return axios.get('http://localhost:4000/evaluation')
}

export const getEvaluationDetails = ({queryKey}) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/evaluation/${id}`)
}
export const postEvaluationDetails = (values) => {
    return axios.post(`http://localhost:4000/evaluation`,values)
}
