import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  completed: boolean ;
  title: string;
}

axios.get(url).then(response => {
 
  const todo = response.data as Todo;

  const id = todo.id;

  const title = todo.title;

  const finished = todo.completed;
  
  logTodo( id, title , finished ); 

});

const logTodo = function(id: number, title: string, finished: boolean) {
  console.log(`todo with Id : ${id} 
  H as a title of : ${title}
 Is It Finished :  ${finished}`);
};
