import { createAction, props } from '@ngrx/store';
import { TaskItemModel } from '../../interfaces/task-item.model';

export const addTask = createAction(
    '[Tasks] Added task',
    props<{ task: TaskItemModel }>()
);
export const updateTask = createAction(
    '[Tasks] Update task',
    props<{ task: TaskItemModel }>()
);
export const setTasks = createAction(
  '[Tasks] Set task',
  props<{ tasks: TaskItemModel[] }>()
);
export const deleteTask = createAction(
  '[Tasks] Delete task',
  props<{ task: TaskItemModel }>()
);
