import { useRecoilState } from 'recoil';
import { todoListState } from '../../state/todo';

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todo) => todo === item);

  const onEditItemText = (e) => {
    const newTodo = {
      ...item,
      text: e.target.value,
    };
    const newList = [
      ...todoList.slice(0, index),
      newTodo,
      ...todoList.slice(index + 1),
    ];

    setTodoList(newList);
  };
  const onToggleItemCompletion = () => {
    const newList = [
      ...todoList.slice(0, index),
      { ...item, isCompleted: !item.isCompleted },
      ...todoList.slice(index + 1),
    ];

    setTodoList(newList);
  };
  const onDeleteItem = () => {
    const newList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={onEditItemText} />
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={onToggleItemCompletion}
      />
      <button onClick={onDeleteItem}>X</button>
    </div>
  );
};
