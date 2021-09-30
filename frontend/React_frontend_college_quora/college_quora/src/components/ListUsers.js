import { Component } from "react";
import userServices from "../services/userServices";

class User extends Component{

    constructor(props){
        super(props)
        this.state={
            users:[],
            message:null
        }
        this.deleteUser = this.deleteUser.bind(this);
    }
    componentDidMount(){
      userServices.getUsers().then((response)=>{
          this.setState({users:response.data}); 
      });
    }
    deleteUser(userId) {
        userServices.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }
        render(){
            return (
                 <div>
                     <h2 className="text-center">User List</h2>
                     <div className="row">
                         <table className="table table-striped table-hover">
                             <thead>
                                 <tr>
                                    
                                     <th scope='col'>User First Name</th>
                                     <th scope='col'>User Last Name</th>
                                     <th scope='col'>User Email</th>
                                     <th scope='col'>User Role</th>
                                     <th scope='col'>User Contact</th>
                                     <th scope='col'> Actions </th>
                                 </tr>
                             </thead>
                             <tbody>
                                    {
                                        this.state.users.map(
                                            user=>
                                            <tr key={user.id}>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <td>{user.role}</td>
                                                <td>{user.contact}</td>
                                                <td>
                                                <button className="btn btn-success" onClick={() => this.deleteUser(user.id)}> Delete</button>
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
export default User;