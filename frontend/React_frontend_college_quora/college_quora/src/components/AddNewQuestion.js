import React,{ Component } from "react";
import userServices from "../services/userServices";



class AddNewQuestion extends Component{

    constructor(props){
        super(props)
        this.state={
             question:'',
             user:JSON.parse(localStorage.getItem('user')),
             message: null
        }
        this.handleChange=this.handleChange.bind(this);
        this.addquestion=this.addquestion.bind(this);
      
    }
 
      addquestion=(e)=>{
        e.preventDefault();
          let newquestion={
              question:this.state.question,
              user:this.state.user
          }
          console.log(this.state.user)

          userServices.addNewQuestion(newquestion).then((response)=>{
            this.setState({message : 'Question added successfully.'}); 
         })
         window.location.reload()
        
      }

      handleChange=(e)=>{
          this.setState({question:e.target.value})
         
      }
      
    render(){
        return(
    <div>
       <div>
            <h3 className="text-center text-secondory"><u>Ask Your Question Here</u></h3>
                 <form  onSubmit={this.addquestion}>
                            
                 <textarea className="form-control" type='text'
                  value={this.state.question} onChange={this.handleChange}> </textarea> <br/>
               <input type='submit' className="btn btn-primary"  ></input>
                        
             </form>
                   
                     </div>
    </div>
        )

    }
}
export default AddNewQuestion;