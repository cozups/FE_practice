import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../state/todo';
import { v4 as uuidV4 } from 'uuid';

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onAddTodo = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuidV4(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={onAddTodo}>Add</button>
    </div>
  );
};
