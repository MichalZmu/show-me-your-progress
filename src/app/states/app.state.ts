import { TaskItemModel } from '../interfaces/task-item.model';

export interface TaskState {
    tasks: TaskItemModel[];
    numberOfTasksFinishedToday: number;
}
