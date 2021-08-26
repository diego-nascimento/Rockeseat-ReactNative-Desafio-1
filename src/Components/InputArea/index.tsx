import React from 'react';
import * as SC from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TaskTypes} from '../../Page/Home';

import {Alert} from 'react-native';

type InputAreaProps = {
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  tasks: TaskTypes[];
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  newTask: string;
};

export const InputArea: React.FC<InputAreaProps> = ({
  setTasks,
  newTask,
  setNewTask,
  tasks,
}) => {
  const handlenewTask = () => {
    if (newTask !== '') {
      const result = tasks.find(item => item.name === newTask);
      if (!result) {
        setTasks(oldState => [
          ...oldState,
          {name: newTask, completed: false, id: String(new Date().getTime())},
        ]);
      } else {
        Alert.alert('Tarefa existente', 'Essa tarefa já existe', [
          {
            text: 'Ok',
          },
        ]);
      }
    }
  };
  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.Input
          placeholder="Adicione uma tarefa"
          onChangeText={(value: string) => setNewTask(value)}
          value={newTask}
        />
        <SC.ButtonInput activeOpacity={1} onPress={handlenewTask}>
          <SC.ButtonText>
            <Icon name="keyboard-arrow-right" size={25} color="#777" />
          </SC.ButtonText>
        </SC.ButtonInput>
      </SC.Container>
    </SC.Wrapper>
  );
};
