
import { ApiResponse, create } from 'apisauce'
import { api } from './clients'





export const Backend = {

  getProduct: async () =>
    api.get('/allProduct').then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),



  getUser: async () =>
    api.get('/allUsers').then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),

  getSıngleUser: async (id: number) =>
    api.get(`/allUsers/${id}`).then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),

  VoteSurvey: async (id: Number,key:Number) =>
    api.post(`/updateSurvey/${id}`, {

   "choice":key
     

    }).then(response => {
      console.log(response)
    }),




  getSurvey: async () =>
    api.get('/allSurvey').then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),



  getAnnoucment: async () =>
    api.get('/allAnnouncement').then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),


  getSingleProduct: async (id) =>
    api.get('/allProduct/' + id).then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data,
          console.log(response.data)
      } else {
        console.log(response)
      }
    }),


  signin: async (email: String, password: String) =>
    api.post(`/signin`, {
      "email": email,
      "password": password,


    }).then(async (response:any) => {
      console.log(response.data["data"])
      if (response.data["message"] == true) {
        console.log("true dönüyor",response.data)
        localStorage.setItem('token', (response.data["data"] as any));
        
        const user = response.data["user"].id
        localStorage.setItem('user', user);
        return true
      }
      else {
        console.log("dönen değer:", response.data["message"])
        return false
      }
    }),

    getSignerUser: async (id: number) =>
    api.get(`/allUsers/${id}`).then((response: ApiResponse<any>) => {
      if (response.ok) {
        return response.data
      } else {
        console.log(response)
      }
    }),


  //signout

  signout: async (token: String) =>
    api.get(`/signout/${token}`, { headers: { Authorization: token } }).then(() => {
      localStorage.removeItem('token');
      return true
    }
    ),


  //create user
  createUser: async (email: String, password: String) =>
    api.post(`/createUser`, {

      "email": email,
      "password": password,

    }).then(async (response) => {
      console.log(response)
    })
}



//TOKENİ LOCALSTORAGE DE TUT localStorage.setItem('myData', data);+++
//HER İSTEĞİN HEADERİNE BU TOKENİ EKLE  +++