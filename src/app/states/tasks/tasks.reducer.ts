import {createReducer, on} from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import {TaskItemModel} from '../../interfaces/task-item.model';

export const initialState: ReadonlyArray<TaskItemModel> = [];


export const TasksReducer = createReducer(
  initialState,
  on(tasksActions.getTasks, (state, {tasks}) => tasks),
  on(tasksActions.addTask, (state, {task}) => [...state, task]),
);
