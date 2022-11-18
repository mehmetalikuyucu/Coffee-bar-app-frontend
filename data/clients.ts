// showLastCommitMessageForThisLibrary.js
import { ApiResponse, create } from 'apisauce'

// define the api
export const api = create({
  baseURL: 'http://172.31.16.1:11000',
})

api.addRequestTransform(request => {
 
 if(localStorage.getItem('token')){
   request.headers['Authorization'] = localStorage.getItem('token')
 }
 else{
    console.log("token is not avilable")
 }
})





//1-localstoregeye jwt tokeni kaydet var mı diye bak +++
//2-varsa requestin headerine jwt token ekle +++
//yoksa birşey yapma+++