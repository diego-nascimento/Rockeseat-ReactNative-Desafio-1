import React from 'react';
import {View} from 'react-native';
import {Header} from '../../Components/Header/index';
import {InputArea} from '../../Components/InputArea/index';
import {ListTasks} from '../../Components/ListTasks';

export type TaskTypes = {
  name: string;
  completed: boolean;
  id: string;
};

export const Home: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskTypes[]>([]);
  const [task, setTask] = React.useState<string>('');
  return (
    <View>
      <Header count={tasks.length} />
      <InputArea
        setTasks={setTasks}
        setNewTask={setTask}
        newTask={task}
        tasks={tasks}
      />
      <ListTasks
        tasks={tasks}
        setTasks={setTasks}
        editTask={task}
        setEditTask={setTask}
      />
    </View>
  );
};
