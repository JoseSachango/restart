/* eslint-disable import/no-anonymous-default-export */
console.log("Inside the API folder")
const axios = require("axios");
//import axios from "axios"
//The base URL needs to be the same as the one react is running on, not the one express is running on.
// const axiosinstance = axios.create({
//     baseURL: 'http://localhost:3001'
//  });

 const axiosinstance = axios.create({
  baseURL: 'https://enigmatic-lowlands-22287'
});


// Export an object with a "search" method that searches the Giphy API for the passed query
/*export default {
  getUserInfo: function(query) {
    return axios.get(query)
  },
  postUserInfo: function(query,data){
      console.log("This is the data for post user info: ",data)
      return axios.post(query,data)
    
  }
}; */


module.exports = {

    getUserInfo: function(query) {
      console.log("Inside getUserInfo")
      return axiosinstance.get(query)
    },
    postUserInfo: function(query,data){
        console.log("This is the data for post user info: ",JSON.stringify(data))
      
        return axiosinstance.post(query,data)
      
    },
    updateUserInfo: function(query,data){

      console.log("This is the data for update user info: ",JSON.stringify(data))

      return axiosinstance.put(query,data)
    }
  };