import { createReducer, on, State } from '@ngrx/store';
import * as tasksActions from './tasks.actions';
import { TaskState } from '../app.state';

export const initialState: TaskState = {
    tasks: JSON.parse(localStorage.getItem('tasks')),
    numberOfTasksFinishedToday: 0,
};

export const TasksReducer = createReducer(
    initialState,
    on(tasksActions.addTask, (state, action) => {
        return {
            tasks: [...state.tasks, action.task],
            numberOfTasksFinishedToday: state.numberOfTasksFinishedToday,
        };
    }),
    on(tasksActions.updateTask, (state, action) => {
        const tasksCopy = state.tasks.map((value) =>
            value._id === action.task._id ? (value = action.task) : value
        );
        return {
            tasks: tasksCopy,
            numberOfTasksFinishedToday: state.numberOfTasksFinishedToday,
        };
    }),
    on(tasksActions.setTasks, (state, action) => {
        return {
            tasks: [...action.tasks],
            numberOfTasksFinishedToday: state.numberOfTasksFinishedToday,
        };
    }),
    on(tasksActions.deleteTask, (state, action) => {
        const index = state.tasks.indexOf(action.task);
        const tasksCopy = [...state.tasks];
        if (index !== -1) {
            tasksCopy.splice(index, 1);
        }
        return {
            tasks: tasksCopy,
            numberOfTasksFinishedToday: state.numberOfTasksFinishedToday,
        };
    }),
    on(tasksActions.setNumberOfTasksFinishedToday, (state, action) => {
        return {
            numberOfTasksFinishedToday: action.numberOfTasks,
            tasks: state.tasks,
        };
    })
);
