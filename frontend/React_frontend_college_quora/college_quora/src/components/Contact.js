import React,{Component} from "react";
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='jumbotron '>
           
           <div className="container">
             <div className="row">
                 <div className="col">
                    <h5>DEEPAK MANE</h5>
                    <p>Email:deepakmane33@gmail.com</p>
                    <p>Mobile:8888749765</p>
                 </div>
                 <div className="col">
                    <h5>MANISH GAVANDGAVE </h5>
                    <p>Email:manishdg3618@gmail.com</p>
                    <p>Mobile:70203 45394</p>
                </div>
                </div>
             </div>
        </div> );
    }
}
 
export default Contact;