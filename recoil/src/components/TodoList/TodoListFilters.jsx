import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../../state/todo';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const onSelectFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      Filter:
      <select value={filter} onChange={onSelectFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};
