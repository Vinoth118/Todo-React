import { Heading, Flex} from '@chakra-ui/react' ;
import {useState ,useEffect} from 'react';
import AddTodo from './components/addTodo';
import Todo from './components/todo';
function App() {
  const [todos,setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  function deleteTodo(id){
    const newTodos = todos.filter(todo =>{
      return todo.id!== id
    })
    setTodos(newTodos);
  }

  function onClickCheck (id, value) {
    const newTodoList = todos.map((todo) => {
      if(todo.id == id) {
        todo.isCompleted = value;
      }
      return todo;
    })
    setTodos(newTodoList);
  }

  function addTodo(todo){
    setTodos([...todos, todo])
  }

  return (
    <Flex w = "100%" direction = "column" h = "100vh" justifyContent={"center"} overflowY={"hidden"} alignItems={"center"}>
      <Flex direction = "column" h = {["100%", "100%", "70%", "70%", "70%"]} bg = "#cc2b5e" justifyContent={"center"} alignItems={"center"} w = {["95%", "90%", "60%", "50%", "40%"]}>
        <Flex direction={"column"} bg = "white" padding = "20px" h = "85%" w = "85%">
          <Heading mb ="20px" alignSelf={"center"}>Todo Application</Heading>
          <AddTodo addTodo = {addTodo} />
          <Flex w = "100%" mt = "20px" overflow = "scroll" pr = "15px" direction = "column">
            {todos.map((todo, index) => {
              return <Flex key = {index} my = "5px">
                <Todo todo = {todo} onClickCheck = {onClickCheck} onClickDelete = {deleteTodo} />
              </Flex>
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App;
