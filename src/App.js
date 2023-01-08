import './App.css'
import './components/Todo.css';
import Todoheader from './components/Todoheader';
import Todolists from './components/Todolist';
import { useState } from 'react';

function App() {
  const [todoState,setTodostate] = useState({
    todoLists:[],
    inputText:""
  })
  const Change = (e)=>{
    setTodostate({
      ...todoState, //원래있던 todostate값을 저장
      inputText: e.target.value
    });
  };
  const Addlist=()=>{
    const newtodolist = [
      ...todoState.todoLists,
      {id:todoState.todoLists.length,text:todoState.inputText}
    ]
    setTodostate({
        todoLists:newtodolist,
        inputText:""
    })
  }
  const delTodoLists = (id)=>{
    const newtodolist = todoState.todoLists.filter(list=>list.id !== id);
    setTodostate({
      ...todoState,
      todoLists:newtodolist
    })  
  }
  return (
    <div className="App todo">
      <Todoheader
      inputText={todoState.inputText} //value로 들어갈값
      Change ={Change}
      Addlist={Addlist}      
      />
      <Todolists
      todoLists = {todoState.todoLists} // li를 만들기위해 리스트값을 받아옴
      deltodolists = {delTodoLists}
      />
    </div>
  );
}

export default App;
