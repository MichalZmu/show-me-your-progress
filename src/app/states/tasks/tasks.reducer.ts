import {createReducer, on, State} from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import {AppState} from '../app.state';

const FORM_ID = 'some globally unique string';

export const initialState: AppState = {
  tasks: JSON.parse(localStorage.getItem('tasks'))
};

export const TasksReducer = createReducer(
  initialState,
  on(tasksActions.getTasks, (state, {tasks}) => {
    return {tasks};
  }),
  on(tasksActions.addTask, (state, action) => {
    return {tasks: [...state.tasks, action.task]};
  }),
  on(tasksActions.updateTask, (state, action) => {
    return {tasks: state.tasks.map((value) => value._id === action.task._id ? value = action.task : value)};
  }),
  on(tasksActions.setTasks, (state, action) => {
    return {tasks: [...state.tasks, ...action.tasks]};
    })
);
