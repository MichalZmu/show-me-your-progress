import { createAction, props } from '@ngrx/store';
import { TaskItemModel } from '../../interfaces/task-item.model';

export const getTasks = createAction('[Tasks] Get tasks');
export const addTask = createAction(
    '[Tasks] Add task',
    props<{ task: TaskItemModel }>()
);
export const updateTask = createAction(
    '[Task] update task',
    props<{ task: TaskItemModel }>()
);
export const setTasks = createAction(
    '[Tasks] update task',
    props<{ tasks: TaskItemModel[] }>()
);
export const deleteTask = createAction(
    '[Task] delete task',
    props<{ task: TaskItemModel }>()
);
