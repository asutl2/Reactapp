import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'

const Todo = () => {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <div>
        <VStack spacing={'15px'}>
            <Box marginTop={'40px'} color={'teal.400'} display="flex" alignItems="center" justifyContent="space-between">
                <Text fontSize={'5xl'} as={'b'}><h1>ToDoList</h1></Text>
            </Box>
            <Box display="flex" align="center" justifyContent="center">
                <AddTodo setTodos={setTodos} />
            </Box>
            <Box>
                <TodoList todos={todos} setTodos={setTodos}/>
            </Box>    
        </VStack>
    </div>
  );
};

export default Todo;