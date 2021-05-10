// import axios from 'axios';

// export  const axiosInstance =axios.create({
//     baseURL:"https://jsonplaceholder.typicode.com/posts"
// })
// axiosInstance.interceptors.request.use(
//     function (config) {
//       // Do something before request is sent
//       if (localStorage.getItem("token")) {
//         config.headers["Autherization"] = localStorage.getItem("token");
//       }
//       return config;
//     },
//     function (error) {
//       // Do something with request error
//       return Promise.reject(error);
//     }
//   );