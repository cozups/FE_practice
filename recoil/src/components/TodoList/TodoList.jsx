import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../state/todo';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoItem } from './TodoItem';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoItemCreator />
      <TodoListStats />
      <TodoListFilters />

      {todoList.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
};
