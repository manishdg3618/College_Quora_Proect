import React, { Component } from "react";

import userServices from "../services/userServices";

class Answer extends Component{

    constructor(props){
        
        super(props)
        this.state={
          answers:[],
         id:'',
         getquestion:localStorage.getItem('question')
        }
      this.deleteAnswer=this.deleteAnswer.bind(this)
    }
    componentDidMount(){
    
        userServices.getAnswersById(window.localStorage.getItem('que_id')).then((response)=>{

            this.setState({answers:response.data});
           console.log(this.state.answers)      
        });
       
      }
      deleteAnswer(ansId){
        this.userdata=JSON.parse(localStorage.getItem('user'));
        if(this.userdata.role =='FACULTY' || this.userdata.role=='ADMIN'){
        userServices.deleteAnswer(ansId)
        .then(res => {
            this.setState({message : 'Question deleted successfully.'});
           
                })
            window.location.reload();

        }else
        {
     alert("Answers can be only deleted by Faculty");
     
    }

      }

    render(){
       

        return(
    <div>
        <hr/>
        <h5 className="bg-light">Q){this.state.getquestion}</h5>
          <h2 className="text-center btn-warning">Answers</h2>
          
                     <div className="card">
                         <table  className="table">
                             <thead className="thead-dark">
                                 <tr>
                                   
                                     <th scope='col'> Answers </th>
                                     <th scope='col'> Given By</th>
                                     <th scope='col'> Date </th>

                                     <th scope='col'> Actions </th>
                                 </tr>
                             </thead>
                             <tbody>
                             
                              {
                                    this.state.answers.map(
                                        answers=>
                                            <tr key={answers.id}>
                                               
                                                <td>{answers.answer}</td>
                                                <td>{answers.user.firstName} {answers.user.lastName}</td>
                                                <td>Answered On {answers.date}</td>
                                                <td>
                                                <button className="btn btn-success" onClick={() => this.deleteAnswer(answers.id)}> Delete</button>
                                               </td>
                                            </tr>
                                           )
                                       
                                       } 
                                       
                             </tbody>
                         </table>
                     </div>
              </div>
        )

    }
}
export default Answer;