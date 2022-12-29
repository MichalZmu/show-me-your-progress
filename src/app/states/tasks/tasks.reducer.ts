import { createReducer, on, State } from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import { AppState } from '../app.state';

const FORM_ID = 'some globally unique string';

export const initialState: AppState = {
    tasks: JSON.parse(localStorage.getItem('tasks')),
    numberOfTasksFinishedToday: 0,
};

export const TasksReducer = createReducer(
    initialState,
    on(tasksActions.addTask, (state, action) => {
        console.log('action: ', action);
        return { tasks: [...state.tasks, action.task] };
    }),
    on(tasksActions.updateTask, (state, action) => {
        return {
            tasks: state.tasks.map((value) =>
                value._id === action.task._id ? (value = action.task) : value
            ),
        };
    }),
    on(tasksActions.setTasks, (state, action) => {
        return { tasks: [...action.tasks] };
    }),
    on(tasksActions.deleteTask, (state, action) => {
        const index = state.tasks.indexOf(action.task);
        const tasksCopy = [...state.tasks];
        if (index !== -1) {
            tasksCopy.splice(index, 1);
        }
        return { tasks: tasksCopy };
    }),
    on(tasksActions.setNumberOfTasksFinishedToday, (state, action) => {
        return { numberOfTasksFinishedToday: action.numberOfTasks, ...state };
    })
);
