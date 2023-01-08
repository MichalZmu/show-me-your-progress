import { createSelector } from '@ngrx/store';
import { TaskState } from '../app.state';

export interface AppState {
    tasks: TaskState;
}

export const selectTaskState = (state: AppState) => state.tasks;

export const selectNumberOfTask = createSelector(
    selectTaskState,
    (state: TaskState) => {
        return state.numberOfTasksFinishedToday;
    }
);

export const selectTasks = createSelector(
    selectTaskState,
    (state: TaskState) => state.tasks
);
