import * as SC from './style';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TaskTypes} from '../../Page/Home';
import React from 'react';
import {Alert} from 'react-native';

type ListTasksProps = {
  tasks: TaskTypes[];
  setTasks: React.Dispatch<React.SetStateAction<TaskTypes[]>>;
  item: TaskTypes;
  editTask: string;
  setEditTask: React.Dispatch<React.SetStateAction<string>>;
};

export const renderTask: React.FC<ListTasksProps> = ({
  tasks,
  setTasks,
  item,
  editTask,
  setEditTask,
}) => {
  const handleEdit = () => {
    Alert.alert(
      'Editar Item',
      'Tem certeza que você deseja editar esse item?',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => {
            setTasks(oldState => [
              ...oldState.filter(x => x.id !== item.id),
              {id: item.id, completed: item.completed, name: editTask},
            ]);
            setEditTask('');
          },
        },
      ],
    );
  };

  const handleDelete = () => {
    Alert.alert(
      'Remover Item',
      'Tem certeza que você deseja remover esse item?',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () =>
            setTasks(tasks.filter(itemFilter => item.id !== itemFilter.id)),
        },
      ],
    );
  };

  return (
    <SC.Wrapper>
      <SC.ItemContainer>
        <CheckBox
          value={item.completed}
          onValueChange={(value: boolean) => {
            setTasks(oldState => [
              ...oldState.filter(x => item.id !== x.id),
              {id: item.id, name: item.name, completed: value},
            ]);
          }}
        />
        <SC.NameTask checked={item.completed}>{item.name}</SC.NameTask>
      </SC.ItemContainer>
      <SC.ButtonContainers>
        <SC.ButtonInput
          activeOpacity={1}
          onPress={() => {
            handleEdit();
          }}>
          <SC.ButtonText>
            <Icon name="edit" size={25} color="#777" />
          </SC.ButtonText>
        </SC.ButtonInput>
        <SC.ButtonInput
          activeOpacity={1}
          onPress={() => {
            handleDelete();
          }}>
          <SC.ButtonText>
            <Icon name="trash" size={25} color="#777" />
          </SC.ButtonText>
        </SC.ButtonInput>
      </SC.ButtonContainers>
    </SC.Wrapper>
  );
};
