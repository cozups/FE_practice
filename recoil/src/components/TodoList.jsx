import { useRecoilValue } from 'recoil';
import { todoListState } from '../state/atom';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoItemCreator />

      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};
