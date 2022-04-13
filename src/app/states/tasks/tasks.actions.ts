import {createAction, props} from '@ngrx/store';
import {TaskItemModel} from '../../interfaces/task-item.model';

export const getTasks = createAction('[Tasks] Get tasks',  props<{ tasks: ReadonlyArray<TaskItemModel> }>());

export const addTask = createAction('[Tasks] Add task',  props<{ task: TaskItemModel}>());
