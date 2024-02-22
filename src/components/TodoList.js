import React from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { FaTrashCan } from "react-icons/fa6";

const TodoList = ({ todos, setTodos }) => {
  const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleUpdateTask = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Center>
      <Box w={'500px'} p={'3'} bg={'gray.100'}>
        {todos.map((todo, index) => (
          <Box key={index} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none',}}>
              <HStack>
                <Button>
                    <input 
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => handleUpdateTask(index)}
                    />
                </Button>
                <Box>
                    {todo.task}
                </Box>
                <Spacer/>  
                <Box>
                    <FaTrashCan onClick={() => handleRemoveTask(index)} style={{ cursor: 'pointer' }}/>      
                </Box>
              </HStack> 
          </Box>
        ))}
      </Box>
    </Center>
  );
};

export default TodoList;