import { Component } from "react";
import userServices from "../services/userServices";
import { Link } from "react-router-dom";

class Question extends Component{

    constructor(props){
        super(props)
        this.state={
             question:[] ,
             id:'',
             message:''

        }
       
       this.deleteQuestion=this.deleteQuestion.bind(this)
       
    }
    componentDidMount(){
        userServices.getQuestions().then((response)=>{

            this.setState({question:response.data});
           console.log(this.state.question)      
        });
        
      
      }
      
      deleteQuestion(queid) {
        this.userdata=JSON.parse(localStorage.getItem('user'));
        if(this.userdata.role =='FACULTY'){
            userServices.deleteQuestion(queid)
            .then(res => {
                this.setState({message : 'Question deleted successfully.'});
               
        })
       
       }else
           {
        alert("Question can only deleted by Faculty");
        
       }
             
        window.location.reload();
    }
   
     addid(id,question){
        window.localStorage.setItem("que_id",id);
        window.localStorage.setItem('question',question );
     }
    render(){
        return(
    <div>
            <div>
                     <h2 className="text-center btn-warning">Question List</h2>
                     <h6>Click on question to get answers</h6>
                     <h6>{this.state.message}</h6>
                     <div className="card">
                         <table  className="table">
                             <thead className="thead-dark">
                                 <tr>
                                    
                                     <th scope='col'> Question </th>
                                     <th scope='col'> Asked By</th>
                                     <th scope='col'> Date </th>
                                     <th scope='col'> Actions </th>
                                     
                                 </tr>
                             </thead>
                             <tbody>
                             
                              {
                                 this.state.question.filter((question)=>{
                                           return question.question
                                 }).map( questions=>

                                    <tr key={questions.id}>
                                               
                                              <Link onClick={()=> this.addid(questions.id,questions.question)} to={`/answers/${questions.id}`}><td>{questions.question}</td></Link> 
                                              <td>{questions.user.firstName}  {questions.user.lastName}</td>
                                              <td>Asked On {questions.date}</td>
                                              
                                              <td>
                                                 <button className="btn btn-success" onClick={() => this.deleteQuestion(questions.id)}> Delete</button>
                                           
                                              </td>
                                    </tr>
                                        )
                                    
                                    } 
                                      
                             </tbody>
                         </table>
                     </div>
                     </div>
    </div>
        )

    }
}
export default Question;