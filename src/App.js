import { Component } from 'react';
import Todo from './components/TodoItems/Todo';
import Add from './components/AddItem/Add';

class App extends Component{
  state={
    data:[
      {id:1,name:"Youssef",age:22},
      {id:2,name:"Abdo",age:19},
      {id:3,name:"Mohamed",age:48},

    ]
    
  }
  deletedata = (id) =>{
    const item =this.state.data;
    const index=item.findIndex(i => i.id === id)
    item.splice(index,1);
    this.setState({data:item})
    // const items=this.state.data.filter(i => {
    //   return i.id !== id
    // })
    // this.setState({items});
  }
  AddData=(i)=>{
    i.id=Math.random();
    const items=this.state.data;
    items.push(i);
    this.setState({data:items})
  }
  render(){
  return (
    <div className="App container">
      <h1 className="text-center">Todo List</h1>
      <Todo data={this.state.data} deletedata={this.deletedata}/>
      <Add AddData={this.AddData}/>
    </div>
  );
}
}
export default App;
