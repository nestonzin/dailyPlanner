import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Input,
  Checkbox,
  Stack,
  Button,
} from "@chakra-ui/react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskBox: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "Comprar leite", completed: false },
    { id: 2, name: "Lavar o carro", completed: true },
    { id: 3, name: "Limpar a casa", completed: false },
  ]);
  const [taskName, setTaskName] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: taskName, completed: false },
    ]);
    setTaskName("");
  };

  const handleChange = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const handleClear = () => {
    setTasks([]);
  };

  return (
    <Flex p={5} borderWidth="1px" borderRadius="5px" marginBlock="1rem">
      <Flex direction="column" gap="1rem">
        <form onSubmit={handleSubmit}>
          <Stack isInline>
            <Input
              type="text"
              placeholder="Adicionar nova tarefa"
              value={taskName}
              onChange={(e: any) => setTaskName(e.target.value)}
            />
            <IconButton type="submit" aria-label="add" boxShadow={"base"} />
          </Stack>
        </form>
        {tasks.map((task) => (
          <Flex
            key={task.id}
            p={2}
            alignItems="center"
            // border="1px"
            borderRadius="10px"
            boxShadow={"base"}
          >
            <Checkbox
              size="lg"
              isChecked={task.completed}
              onChange={() => handleChange(task.id)}
            />
            <Box pl={2}>{task.name}</Box>
          </Flex>
        ))}
        {tasks.length > 0 && (
          <Button mt={4} onClick={handleClear} boxShadow="base">
            Limpar tarefas
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default TaskBox;
