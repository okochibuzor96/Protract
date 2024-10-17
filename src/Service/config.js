import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
    // paramsSerializer(params) {
    //   return queryString.stringify(params, { indices: false });
    // },
  });
   
  // Request Interceptors
  axiosInstance.interceptors.request.use(
    (config) => {
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response Interceptors
  axiosInstance.interceptors.response.use(
    (response) => {
      //success status
      if (response.status === 200) {
        if (response.config.method !== "get") {
          alert('successful')
        }
        return response;
      } else {
        const messages = response.data.messages;
        if (messages) {
          if (messages instanceof Array) {
            return Promise.reject({ messages });
          }
          return Promise.reject({ messages: [messages] });
        }
        return Promise.reject({ messages: ["got errors"] });
      }
    },
    (error) => {
      //unauthorised error
      alert(error)
      console.log('err', error.message)
      //internal server error
      
      //any other error
      
    }
  );
  
  export default axiosInstance;