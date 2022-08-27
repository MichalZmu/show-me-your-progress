import {createAction, props} from '@ngrx/store';
import {TaskItemModel} from '../../interfaces/task-item.model';

export const getTasks = createAction('[Tasks] Get tasks',  props<{ tasks: ReadonlyArray<TaskItemModel> }>());
export const setTasks = createAction('[Tasks] Set tasks',  props<{ tasks: Array<TaskItemModel> }>());
export const addTask = createAction('[Tasks] Add task',  props<{ task: TaskItemModel}>());
export const updateTask = createAction('[Task] update task', props<{ task: TaskItemModel}>());
