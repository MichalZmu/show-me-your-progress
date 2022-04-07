import {initialReservationsState} from './tasks/tasks.state';
import {TaskItemModel} from '../interfaces/task-item.model';

interface InitialAppState {
  reservations: TaskItemModel[];
}

export const initialAppState: InitialAppState = {
  reservations: initialReservationsState,
}

export function getInitialState(): InitialAppState {
  return initialAppState;
}

export interface AppState {
  tasks: ReadonlyArray<TaskItemModel>;
}
