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
  on(tasksActions.addTask, (state, task) => [...state.tasks, task]),
  on(tasksActions.updateTask, (state, {task}) => {
    state.tasks.map((value) => value._id === task._id ? value = task : value);
  }),
  on(tasksActions.setTasks, (state, {tasks}) => {
    return {tasks};
  })
);
