import React, { Component } from "react"
import userServices from "../services/userServices";
import '../Navbar/page.css'



class Login extends Component {

    constructor(props){
        super(props)
        this.state={
         user:{
            id:'',
            firstName: "",
            lastName: "",
            email: "",
            passwd: "",
            role: "" ,
           
         },
         message:null
        
        }
        this.emailHandler=this.emailHandler.bind(this);
        this.passwdHandler=this.passwdHandler.bind(this);
      
        this.loginUser=this.loginUser.bind(this);
    }
   
    loginUser=(e)=>{
        e.preventDefault();
        
        let User={
                  email:this.state.email,
                  passwd:this.state.passwd,
                 };

                userServices.loginUser(User).then(response=>{
                    this.setState({message : 'Login successfull.'});
                    this.setState({user:response.data})
                    localStorage.setItem('user',JSON.stringify(this.state.user));

                    if (this.state.user.role=='STUDENT' ||this.state.user.role=='FACULTY' ) {
                        this.props.history.push('/questions')
                    } else if (this.state.user.role=='ADMIN'){
                        this.props.history.push('/users')
                    }
                  window.location.reload()

                }).catch((error)=>{console.error("in error " ,error.response);
               
                this.setState({message : error.response.data.message});
                this.props.history.push('/');
            });
           
                     
    }

    emailHandler=(event)=>{
        this.setState({email : event.target.value});
    }
    passwdHandler=(event)=>{
        this.setState({passwd: event.target.value});
    }
    componentDidMount() {
      
        this.userData = JSON.parse(localStorage.getItem('user'));
        console.log(this.userData)
        if (localStorage.getItem('user')) {
            this.setState({
                id:this.userData.id,
                firstName: this.userData.firstName,
                lastName: this.userData.lastName,
                email: this.userData.email,
                passwd: this.userData.passwd,
                role:this.userData.role

        })
    } else {
        this.setState({
            id:'',
            firstName: "",
            lastName: "",
            email: "",
            passwd: "",
            role: "" ,
        })
      }

    }



        render(){
        return(
    <div  className='wrapper'>
              
         <div className="card col-md-6 offset-md-3  offset-md-3">
                <h3  className="text-center btn-warning">Welcome to College Quora</h3>
                <p className='text-danger text-center'>{this.state.message}</p>
                <hr/>
                <div className="container" >
 
        <form >
            <div className="form-group">
                    <label >Email:</label>
                     <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" 
                    onChange={this.emailHandler} />
             </div>
            <div className="form-group">
                     <label >Password:</label>
                     <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="passwd"
                     onChange={ this.passwdHandler}/>
             </div>
        
                     <button type="submit" className="btn btn-primary btn-block"  onClick={this.loginUser}>Login</button>
            <div>
                 <br/>
                 <p className="text-center">
                    Dont have an Account <a href="/register">Register</a></p>    
             </div>   <br/>
            
        
        </form>
                 </div>
         </div>
     </div>
    
        )

    }
}
export default Login;