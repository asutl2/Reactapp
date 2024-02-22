//AddTodo.jsファイルではタスクの追加の処理を記述。
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'

const AddTodo = ({ setTodos }) => {
  const [task, setTask] = useState('');

  const handleNewTask = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === '') return;
    setTodos((todos) => [...todos, { task, isCompleted: false }]);
    setTask('');
  };

  return (
    <Center>
        <Box>
            <form onSubmit={handleSubmit}>
                <VStack spacing={'10px'}>
                    <Text fontSize={'mz'} color={'cyan.500'}>Created by Asuka Miyazaki</Text>
                    <Input value={task} 
                        placeholder='Click Here and Add Task' 
                        onChange={handleNewTask}
                        focusBorderColor='teal.400'
                        errorBorderColor='crimson' />
                </VStack>       
            </form>
        </Box>
    </Center>
  );
};

export default AddTodo;