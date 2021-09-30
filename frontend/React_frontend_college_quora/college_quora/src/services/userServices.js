import axios from 'axios';
 const User_API_Base_URL="http://localhost:8080";

 class UserService{
   getUsers(){
       return axios.get(User_API_Base_URL +"/users");
   }
   deleteUser(userId) {
    return axios.delete(User_API_Base_URL + '/users/' + userId);
   }
   saveUser(User){
       return axios.post(User_API_Base_URL +"/register",User);

   }

   loginUser(data){
    return axios.post(User_API_Base_URL + "/",data);
   }
   getQuestions(){

    return axios.get(User_API_Base_URL +"/questions")
   }
   addNewQuestion(newquestion){
       return axios.post(User_API_Base_URL +'/questions',newquestion)
   }
   getAnswersById(que_id){

    return axios.get(User_API_Base_URL +'/answers/'+que_id )
   }
   addNewAnswer(newanswer){
       return axios.post(User_API_Base_URL+"/answers",newanswer)
   }
   deleteQuestion(que_id){
       return axios.delete(User_API_Base_URL +'/questions/'+que_id)
   }
   deleteAnswer(id){
       return axios.delete(User_API_Base_URL +'/answers/'+id)

   }
}
export default new UserService();