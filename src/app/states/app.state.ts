import { TaskItemModel } from '../interfaces/task-item.model';

export interface AppState {
    tasks: TaskItemModel[];
    numberOfTasksFinishedToday: number;
}
