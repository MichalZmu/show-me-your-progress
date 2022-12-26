import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-task-stats',
  templateUrl: './task-stats.component.html',
  styleUrls: ['./task-stats.component.scss']
})
export class TaskStatsComponent implements OnInit {
  numberOfTaskFinishedToday: number;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getNumberOfTaskFinishedToday().subscribe(data => {
      console.log('getNumberOfTaskFinishedToday: ', data);
      this.numberOfTaskFinishedToday = data.length;
    })
  }

}
