import {createReducer, on} from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import {TaskItemModel} from '../../interfaces/task-item.model';

export interface State {
  tasks: [];
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
  isLoadingFailure?: boolean;
}

// export const initialState: State = {
//   tasks: [],
//   isLoading: false,
//   isLoadingSuccess: false,
//   isLoadingFailure: false
// };

export const initialState: ReadonlyArray<TaskItemModel> = [];


export const TasksReducer = createReducer(
  initialState,
  on(tasksActions.getTasks, (state, { books }) => books),
);
