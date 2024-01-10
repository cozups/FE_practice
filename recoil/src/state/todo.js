import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'TodoList',
  default: [],
});

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'Show All',
});

export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(todoListFilterState);

    switch (filter) {
      case 'Show Completed':
        return todoList.filter((todo) => todo.isCompleted);
      case 'Show Uncompleted':
        return todoList.filter((todo) => !todo.isCompleted);
      default:
        return todoList;
    }
  },
});

export const todoListStatsState = selector({
  key: 'TodoListStats',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(
      (todo) => todo.isCompleted
    ).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
