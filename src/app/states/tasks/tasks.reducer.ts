import {createReducer, on, State} from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import {TaskItemModel} from '../../interfaces/task-item.model';

export const initialState: ReadonlyArray<TaskItemModel> = JSON.parse(localStorage.getItem('tasks'));

export const TasksReducer = createReducer(
  initialState,
  on(tasksActions.getTasks, (state, {tasks}) => tasks),
  on(tasksActions.addTask, (state, {task}) => [...state, task]),
);
