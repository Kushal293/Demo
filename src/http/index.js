import { CONSTANTS, baseUrl } from 'app.config';
import axios from 'axios';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem(CONSTANTS.token);
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error?.response && error?.response?.status === 401) {
      localStorage.removeItem(CONSTANTS.token);
      window.location.pathname = `/`;
    }
    return Promise.reject(error);
  }
);

// Get home slider content

export const getSliderContent = () =>
  api.get('/rooted_in_love/user/home/getsliders');

// Get youtube videos
export const getYoutubeVideos = () => api.get('/rooted_in_love/user/home/getvideos');

//Get Search Products
export const searchProducts = (search) => api.get(`/rooted_in_love/user/product/search?value=${search}`);

// Get Home Screen Products
export const homeProducts = () => api.get(`/rooted_in_love/user/home/productlist/get`);

// Get HealthConditions

export const getHealthConditions = () =>
  api.get('/rooted_in_love/user/gethealthconditions');
// Get HealthConditions

export const getPetProfileById = (id) =>
  api.get(`/rooted_in_love/user/pet/getprofile?pet_id=${id}`);

// Get shop categories

export const getCategories = () =>
  api.get('/rooted_in_love/user/product/getproductcategory');

// Get Products by categoryId

export const getProductsByCategory = categoryId =>
  api.post(`/rooted_in_love/user/product/getproductbyproductcategory`, {
    product_category_id: categoryId,
  });

// Get Product by productId

export const getProductById = productId =>
  api.get(`/rooted_in_love/user/product/getproductdetails`, {
    _id: productId,
  });

// Get Related products

export const getRelatedProducts = (productId, option) =>
  api.post(`/rooted_in_love/user/product/getrelatedproducts`, {
    product_id: productId,
    all: option,
  });

//Get BCS Questions

// export const getQuestion = () => {
//   api.get(`/rooted_in_love/user/bsc/getall?_id=1`);
// }

// Post Pet Profile

// export const postPetProfile = async (data) => {
//   return await api.post(`/rooted_in_love/user/pet/add`, data);
// }

export const postRequest = async (API_URL, requestData) => {
  console.log('Calling HTTP POST Request....')
 

  const config = {
    headers: {
  
    Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTdkZjVkOTFiOGRhYmE0Y2U1ZTQzNGQyYmNhYWVhY2YyNTIwMTBjN2Q0ODljNzAxNTBmOWRmMDhhY2EwNzE0MmNlNWY5MGJkZjhiNGY1YzAiLCJpYXQiOjE3MTk5NDY0NzcuNzkwMjY3LCJuYmYiOjE3MTk5NDY0NzcuNzkwMjY4LCJleHAiOjE3NTE0ODI0NzcuNzc3NzgzLCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.EOwW-PNIg7XmzxdtnSPebtQO0BaB1adISTAXuCriz1hZ-xWf5bXfX6Y92KOPeB3N8-AqDL7Hj1ameza-2E_B6O1I5P6BJXJyZuarUD3cm5bHde9wlmW5OZ_IcPVfErxuEQWi5cudtkgXt9Yf8fcQVL7ckmkAhsYEHNrzXMIUCcD8AvOp6RO1fdp5Y7Qg6ePF01nVtO-Y-NiCClcg_KU65KHBAVpFwxOPbfJo10ShNuiKYPwABMwoe26jPk15bz5--7Dn8-aV1e48mnMMBDE8DRaq7FXqLu-cTQR9ZpYmEShutONqeVhyZ8qbXqV-Ixf28thZEKS2ci_G8GT9GVxlAHxKWrjBLVoavV7adSu2kPbFsKOMoMHapPKynvlxFLzlhT_PPB1538H33zDsHoiW06adeXoUlRjsvO1xuN7Bo7XVUmdXxYP0BRUAx_-016u3f5bBTM-VqnfiRkr09EwY5GmyesY7cUvP-kbxJXiDZMbWklbKFB7tqdz05FpAHw_mujnHIy4j_7fexY-0z8Y-FcprsW-SNrCjuY5LMOHbEz_xU4BQbbtlTR7FGbajJB0PWqpvns8hUzhQCkg56P_OvzNkPW-ssXV3lnuYoaEIRnmLuFX0safDAtSouwJVL1oi7L9L2-0fAyIO99kWtX9qZVnPjPgELyLW6T4GopYF9zA",

    }
  };
  let response;
  await api.post(
    API_URL,
    requestData, config
  ).then(res => {
  
    console.log('postRequest res.data ==  ', res.data);
    if (res.status) {
      response = res.data;
    }
    else{
      response=res.status
    }

  })
    .catch(error => {
      console.log('Post Api URL while error ===  ', API_URL, '  ', requestData)
     
      console.log('Error caught at servidce.js file = ', error.message);
   
    
    });
  return response


}

export const getRequest = async (API_URL) => {
  

   
  let response;
  const config = {
    headers: {
  //     //  Authorization: `Bearer ${token}`
      // 'Content-Type': 'application/json',
      
  //     // 'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZWdEE2TXI5Q2UiLCJpYXQiOjE2NTYwOTY1MTAsImV4cCI6MjI2MDg5NjUxMH0.JfrmN09MvKzP-840Yn-VuE2IuSlbS4FfJyE5ReMBzW8'
   Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTdkZjVkOTFiOGRhYmE0Y2U1ZTQzNGQyYmNhYWVhY2YyNTIwMTBjN2Q0ODljNzAxNTBmOWRmMDhhY2EwNzE0MmNlNWY5MGJkZjhiNGY1YzAiLCJpYXQiOjE3MTk5NDY0NzcuNzkwMjY3LCJuYmYiOjE3MTk5NDY0NzcuNzkwMjY4LCJleHAiOjE3NTE0ODI0NzcuNzc3NzgzLCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.EOwW-PNIg7XmzxdtnSPebtQO0BaB1adISTAXuCriz1hZ-xWf5bXfX6Y92KOPeB3N8-AqDL7Hj1ameza-2E_B6O1I5P6BJXJyZuarUD3cm5bHde9wlmW5OZ_IcPVfErxuEQWi5cudtkgXt9Yf8fcQVL7ckmkAhsYEHNrzXMIUCcD8AvOp6RO1fdp5Y7Qg6ePF01nVtO-Y-NiCClcg_KU65KHBAVpFwxOPbfJo10ShNuiKYPwABMwoe26jPk15bz5--7Dn8-aV1e48mnMMBDE8DRaq7FXqLu-cTQR9ZpYmEShutONqeVhyZ8qbXqV-Ixf28thZEKS2ci_G8GT9GVxlAHxKWrjBLVoavV7adSu2kPbFsKOMoMHapPKynvlxFLzlhT_PPB1538H33zDsHoiW06adeXoUlRjsvO1xuN7Bo7XVUmdXxYP0BRUAx_-016u3f5bBTM-VqnfiRkr09EwY5GmyesY7cUvP-kbxJXiDZMbWklbKFB7tqdz05FpAHw_mujnHIy4j_7fexY-0z8Y-FcprsW-SNrCjuY5LMOHbEz_xU4BQbbtlTR7FGbajJB0PWqpvns8hUzhQCkg56P_OvzNkPW-ssXV3lnuYoaEIRnmLuFX0safDAtSouwJVL1oi7L9L2-0fAyIO99kWtX9qZVnPjPgELyLW6T4GopYF9zA",

    }
  };
 
  await axios
    .get(API_URL,config)
    .then(res => {
      
     
      if (res.status) {
        response = res.data;
        // console.log(res);
        
      }
      else{
        response=res.statusText
      }
      // console.log(res);
      // console.log(config);

    })
    .catch(error => {
      console.log('Get Api URL while error ===  ', API_URL)
      console.log('Error caught at service.js file = ', error.message);
    });
  return response
}
export const patchRequest = async (API_URL, requestData) => {
  // console.log('Calling HTTP POST Request....')
 

  const config = {
    headers: {
      //  Authorization: `Bearer ${token}`
      // 'Content-Type': 'application/json',
      // 'authtoken':token
      // 'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZWdEE2TXI5Q2UiLCJpYXQiOjE2NTYwOTY1MTAsImV4cCI6MjI2MDg5NjUxMH0.JfrmN09MvKzP-840Yn-VuE2IuSlbS4FfJyE5ReMBzW8'
      // 'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlZWdEE2TXI5Q2UiLCJpYXQiOjE2NTYwOTY1MTAsImV4cCI6MjI2MDg5NjUxMH0.JfrmN09MvKzP-840Yn-VuE2IuSlbS4FfJyE5ReMBzW8"
      'Authorization': "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTdkZjVkOTFiOGRhYmE0Y2U1ZTQzNGQyYmNhYWVhY2YyNTIwMTBjN2Q0ODljNzAxNTBmOWRmMDhhY2EwNzE0MmNlNWY5MGJkZjhiNGY1YzAiLCJpYXQiOjE3MTk5NDY0NzcuNzkwMjY3LCJuYmYiOjE3MTk5NDY0NzcuNzkwMjY4LCJleHAiOjE3NTE0ODI0NzcuNzc3NzgzLCJzdWIiOiIxIiwic2NvcGVzIjpbInVzZXIiXX0.EOwW-PNIg7XmzxdtnSPebtQO0BaB1adISTAXuCriz1hZ-xWf5bXfX6Y92KOPeB3N8-AqDL7Hj1ameza-2E_B6O1I5P6BJXJyZuarUD3cm5bHde9wlmW5OZ_IcPVfErxuEQWi5cudtkgXt9Yf8fcQVL7ckmkAhsYEHNrzXMIUCcD8AvOp6RO1fdp5Y7Qg6ePF01nVtO-Y-NiCClcg_KU65KHBAVpFwxOPbfJo10ShNuiKYPwABMwoe26jPk15bz5--7Dn8-aV1e48mnMMBDE8DRaq7FXqLu-cTQR9ZpYmEShutONqeVhyZ8qbXqV-Ixf28thZEKS2ci_G8GT9GVxlAHxKWrjBLVoavV7adSu2kPbFsKOMoMHapPKynvlxFLzlhT_PPB1538H33zDsHoiW06adeXoUlRjsvO1xuN7Bo7XVUmdXxYP0BRUAx_-016u3f5bBTM-VqnfiRkr09EwY5GmyesY7cUvP-kbxJXiDZMbWklbKFB7tqdz05FpAHw_mujnHIy4j_7fexY-0z8Y-FcprsW-SNrCjuY5LMOHbEz_xU4BQbbtlTR7FGbajJB0PWqpvns8hUzhQCkg56P_OvzNkPW-ssXV3lnuYoaEIRnmLuFX0safDAtSouwJVL1oi7L9L2-0fAyIO99kWtX9qZVnPjPgELyLW6T4GopYF9zA",
    }
  };
  let response;
  await axios.patch(
    API_URL,
    requestData, config
  ).then(res => {
    // console.log('postRequest res ==  ', res);
    // console.log('postRequest res.data ==  ', res.data);
    if (res.status) {
      response = res.status;
    }
    else{
      response=res.message
    }

  })
    .catch(error => {
      console.log('Post Api URL while error ===  ', API_URL, '  ', requestData)
      console.log('Error caught at service.js file = ', error);
    });
  return response


}