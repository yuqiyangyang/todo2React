import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {
  state={
    todos:[
        {
        id: uuid.v4(),
        title:'take out the trash',
        completed: false
        },
        {
        id: uuid.v4(),
        title:'dinner with wife ',
        completed: true
        },
        {
        id: uuid.v4(),
        title:'meeting with boss',
        completed: false
        },
    ]
}
markComplete=(id) =>{
  this.setState({todos: this.state.todos.map(todo =>{
    if(todo.id ===id){
      todo.completed= !todo.completed
    }
    return todo;
  })})
}

delTodo=(id)=>{
  //use filter method, return another array
  this.setState({todos:[...this.state.todo.filter(todo=>todo.id!==id)]})
}

addToDo=(title) =>{
  const newTodo ={
    id: uuid.v4(),
    title: title,
    completed: false
  }
  this.setState({ todos:[...this.state.todos, newTodo]})
}
  render(){ 
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddToDo addToDo ={this.addToDo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
  
  }

export default App;
