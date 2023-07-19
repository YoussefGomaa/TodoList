import { Component } from "react";


class Add extends Component{
    state={
        name:'',
        age:''
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    submit=(e)=>{
        e.preventDefault();
        this.props.AddData(this.state)
        this.setState({
            name:'',
            age:''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submit}>
                    <input type="text" placeholder="Enter name..." id="name" onChange={this.handlechange} value={this.state.name}></input>
                    <input type="number" placeholder="Enter age..." id="age" onChange={this.handlechange} value={this.state.age}></input>
                    <input type="submit" value="Add"></input>
                </form>
            </div>
        )
    }
}
export default Add;