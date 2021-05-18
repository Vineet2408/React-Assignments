import axios from "axios";
import { Component } from "react";

class TestApi extends Component{

    state ={
        name:''
    }
    handleSubmit(event)
    {
        event.preventDefault();
        const user = {
            email:'abc@gmail.com',
            password:'abc12'
        }
        console.log('making req');
        axios.post(`http://localhost:8080/login`,{email:user.email,password:user.password}).then(res=>{
            console.log('res = ',res.data);
            
        })
    }

    componentDidMount()
    {
           /*  axios.get(`https://jsonplaceholder.typicode.com/users`).then(res=>{
                console.log('res = ',res);
                console.log('res .data = ',res.data);
                this.setState({persons:res.data})
            }) */
    }

    render()
    {

        return (
        
            <form onSubmit={this.handleSubmit}>
                    {/* <div>
                <ul>
                    {this.state.persons.map((p,index)=><li key={index}>{p.name}</li>)}
                </ul>
            </div> */}
                <label>Person name</label>
                <input type="text" name='name'></input>
                <button type='submit'>add</button>
                </form>
        );
    }

}

export default TestApi;