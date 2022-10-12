import { createFeatureSelector } from '@ngrx/store'
import { TaskItemModel } from '../../interfaces/task-item.model'

export const selectTasks = createFeatureSelector<TaskItemModel[]>('tasks')
