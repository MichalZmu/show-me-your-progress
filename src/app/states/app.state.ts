import {TaskItemModel} from '../interfaces/task-item.model';
import {createFormGroupState} from 'ngrx-forms';
import {TaskStatuses} from '../interfaces/task-statuses';

export interface AppState {
  tasks: TaskItemModel[];
}
