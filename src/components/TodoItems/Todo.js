import React from 'react';

const Todo = (props) =>{
    const {data,deletedata} = props;
    const len=data.length;
    const list = len ? (
         data.map(item=>{
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action icon' onClick={() => deletedata(item.id)}>&times;</span>

            </div>
        )
    })
    ):(<p>There is no item to show</p>

    )
     return(
        <div className='listitems'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Action</span>

            </div>
            {list}
            </div>
     )
}
export default Todo;