import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../../state/todo';

export const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentageCompleted = Math.round(percentCompleted);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items uncompleted: {totalUncompletedNum}</li>
      <li>Percent Completed: {formattedPercentageCompleted}%</li>
    </ul>
  );
};
