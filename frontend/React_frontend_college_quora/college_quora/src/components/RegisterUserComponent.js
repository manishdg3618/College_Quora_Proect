import { Component } from "react"
import userServices from "../services/userServices";
import emailjs from 'emailjs-com';

class RegisterUser extends Component{

    constructor(props){
        super(props)

        this.state={
             firstName : '',
             lastName : '',
             email : '',
             role : '',
             passwd : '',
             contact : '',
             message: null
        }
        this.changeFristNameHandler=this.changeFristNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changepasswordHandler=this.changepasswordHandler.bind(this);
        this.changeroleHandler=this.changeroleHandler.bind(this);
        this.changecontactHandler=this.changecontactHandler.bind(this);
        this.registerUser=this.registerUser.bind(this);
    }
    registerUser=(e)=>{
        e.preventDefault();
        let User={firstName:this.state.firstName,
                  lastName:this.state.lastName,
                  email:this.state.email,
                  passwd:this.state.passwd,
                  role:this.state.role,
                  contact:this.state.contact};
                 

                userServices.saveUser(User).then(response=>{
                    this.setState({message : 'User added successfully.'});
                    this.props.history.push('/');
                }).catch((error)=>{console.error("in error " ,error.response.data);
                alert(error.response.data.message);
                this.props.history.push('/');
            });
            emailjs.sendForm('Gmail', 'template_9ha4t4t', e.target, 'user_JkXWiyeybfR4uPqfi2msL')
            .then((result) => {
                console.log(result.text+"okkk");
            }, (error) => {
                console.log(error.text);
            });
    }
    changeFristNameHandler=(event)=>{
        this.setState({firstName : event.target.value});
    }
    changeLastNameHandler=(event)=>{
        this.setState({lastName : event.target.value});
    }
    changeemailHandler=(event)=>{
        this.setState({email : event.target.value});
    }
    changepasswordHandler=(event)=>{
        this.setState({passwd : event.target.value});
    }
    changeroleHandler=(event)=>{
        this.setState({role: event.target.value});
       
    }
    changecontactHandler=(event)=>{
        this.setState({contact: event.target.value});
    }
    cancel(){
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="container">
                <div >
                    <div className="card col-md-6 offset-md-3  offset-md-3">
                           <h3 className="text-center btn-warning" >Register User</h3>
                           <div >
                               <form className="needs-validated" onSubmit={this.registerUser}>
                                   <div className="form-group">
                                       <label><u>First Name :</u></label>
                                       <input  name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFristNameHandler} required></input>
                                       
                                   </div>
                                   <div className="form-group">
                                       <label><u>Last Name :</u></label>
                                       <input name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} required></input>
                                       
                                   </div>
                                   <div className="form-group">
                                       <label><u>Email :</u></label>
                                       <input type="email"  name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeemailHandler} required></input>
                                        
                                   </div>
                                   <div className="form-group">
                                       <label><u>Password :</u></label>
                                       <input type="password"  name="passwd" className="form-control"
                                        value={this.state.passwd} onChange={this.changepasswordHandler} required></input>
                                        
                                   </div>
                                   <div className="form-group">
                                  
                                   <label>
                                   <u>Role :</u>
                                    <select className="form-control" value={this.state.role} onChange={this.changeroleHandler}>
                                        <option value="STUDENT">STUDENT</option>
                                        <option value="FACULTY">FACULTY</option>
                                        
                                         </select>
                                     </label>
                                      
   
                                       
                                   </div>
                                   <div >
                                       <label><u>Contact No. :</u></label>
                                       <input   name="contact" className="form-control"
                                        value={this.state.contact} onChange={this.changecontactHandler} required></input>
                                       
                                   </div> <br/>
                                   <div>
                                    <input type="submit" className="btn btn-outline-success" ></input>
                                    </div>
                                    <button type="button" className="btn btn-outline-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "260px"}}>Cancel</button>
                               </form>

                           </div>
                    </div>
                </div>

            </div>
        )

    }
}
export default RegisterUser;