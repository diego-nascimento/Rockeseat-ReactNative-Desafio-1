import React from 'react';
import {FlatList} from 'react-native';
import {TaskTypes} from '../../Page/Home';
import {renderTask as RenderTask} from '../Item';

type ListTasksProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  editTask: string;
  setEditTask: React.Dispatch<React.SetStateAction<string>>;
};

export const ListTasks: React.FC<ListTasksProps> = ({
  tasks,
  setTasks,
  editTask,
  setEditTask,
}) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({item}) => (
        <RenderTask
          item={item}
          setTasks={setTasks}
          tasks={tasks}
          editTask={editTask}
          setEditTask={setEditTask}
        />
      )}
      keyExtractor={item => String(item.id)}
    />
  );
};
