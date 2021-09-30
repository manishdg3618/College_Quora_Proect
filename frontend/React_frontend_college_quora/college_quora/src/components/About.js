import React,{Component} from "react";
import backgroundimage from '../images/about.jpg'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div  style={{background:`url(${backgroundimage})`}} >
                <h3>Now a days many things has been affected because of pandemic. 
                    One of them is education system. As per government guidelines schools and colleges are not opened yet. 
                    Many schools and colleges have managed to conduct online class programs. 
                    But those programs have some limitations too.
                   Each and every student is not able to attend schools or colleges because of network issues, lack of computer knowledge, lack of equipments, etc.
                   It caused a communication gap between students and teachers as well.
                   To diminish that gap, we are making a software<span className='text-danger'> COLLEGE QUORA</span> that will help to increase communication 
                   between students and teachers who contribute unique insights and quality answers. It will also helps students or teachers to communicate each other from there remote places. Students can ask any doubts, questions to teachers any time and teachers as well as students resolve doubts.</h3>
            </div>
          );
    }
}
 
export default About;