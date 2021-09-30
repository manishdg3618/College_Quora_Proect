import React,{ Component } from "react";
import userServices from "../services/userServices";



class AddNewAnswer extends Component{

    constructor(props){
        super(props)
        this.state={
             answer:'',
             user:JSON.parse(localStorage.getItem('user')),
             que_id:{id:localStorage.getItem('que_id')},
             message: null
        }
        this.handleChange=this.handleChange.bind(this);
        this.addquestion=this.addquestion.bind(this);
      
    }
 
      addquestion=(e)=>{
        e.preventDefault();
          let newanswer={
              answer:this.state.answer,
              que:this.state.que_id,
              user:this.state.user
          }
          console.log(this.state.user)

          userServices.addNewAnswer(newanswer).then((response)=>{
            this.setState({message : 'Question added successfully.'}); 
         })
         window.location.reload()
        
      }

      handleChange=(e)=>{
          this.setState({answer:e.target.value})
         
      }
      
    render(){
        return(
    <div>
       <div>
            <h3 className="text-center text-secndory"><u>Give Your Answer Here</u></h3>
                 <form  onSubmit={this.addquestion}>
                            
                 <textarea className="form-control" type='text'
                  value={this.state.answer} onChange={this.handleChange}> </textarea> <br/>
               <input type='submit' className="btn btn-primary"  ></input>
                        
             </form>
                   
                     </div>
    </div>
        )

    }
}
export default AddNewAnswer;