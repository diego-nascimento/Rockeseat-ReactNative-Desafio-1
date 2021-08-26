import React from 'react';
import * as SC from './style';

interface HeaderProps {
  count: number;
}

export const Header: React.FC<HeaderProps> = ({count = 0}) => {
  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.Title>to.do</SC.Title>
        {count === 0 ? (
          <SC.Tasks>Você não tem tarefas.</SC.Tasks>
        ) : (
          <SC.Tasks>
            Você tem {count} {count === 0 ? 'tarefa' : 'tarefas'}.
          </SC.Tasks>
        )}
      </SC.Container>
    </SC.Wrapper>
  );
};
