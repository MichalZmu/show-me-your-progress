import { Injectable } from '@angular/core';
import { TaskItemModel } from '../interfaces/task-item.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { number } from 'ngrx-forms/validation';
import { NumberOfTasksPlannedForToday } from '../interfaces/number-of-tasks-planned-for-today';

@Injectable({
    providedIn: 'root',
})
export class TaskService {
    private readonly apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getTasks(): Observable<TaskItemModel[]> {
        return this.http.get<TaskItemModel[]>(`${this.apiUrl}/task`);
    }

    getTask(id: string): Observable<TaskItemModel> {
        const params = new HttpParams().append('_id', id);
        return this.http.get<TaskItemModel>(`${this.apiUrl}/task`, { params });
    }

    addTask(task: TaskItemModel): Observable<any> {
        return this.http.post<TaskItemModel>(`${this.apiUrl}/task`, task);
    }

    updateTask(task: TaskItemModel): Observable<any> {
        return this.http.post<TaskItemModel>(
            `${this.apiUrl}/task/update`,
            task
        );
    }

    deleteTask(task: TaskItemModel): Observable<any> {
        return this.http.post<TaskItemModel>(
            `${this.apiUrl}/task/delete`,
            task
        );
    }

    getNumberOfTaskFinishedToday(): Observable<TaskItemModel[]> {
        return this.http.get<TaskItemModel[]>(
            `${this.apiUrl}/task/todayFinishedTasks`
        );
    }

    setNumberOfTasksPlannedForToday(
        quantityOfTasks: NumberOfTasksPlannedForToday
    ): Observable<NumberOfTasksPlannedForToday> {
        return this.http.post<NumberOfTasksPlannedForToday>(
            `${this.apiUrl}/task/taskPlannedForToday`,
            quantityOfTasks
        );
    }

    getNumberOfTasksPlannedForToday(): Observable<NumberOfTasksPlannedForToday> {
        return this.http.get<NumberOfTasksPlannedForToday>(
            `${this.apiUrl}/task/taskPlannedForToday`
        );
    }
}
