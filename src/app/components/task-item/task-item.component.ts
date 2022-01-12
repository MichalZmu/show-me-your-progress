import {Component, Input, OnInit} from '@angular/core';
import {TaskItem} from '../../interfaces/task-item';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskItem;

  constructor() { }

  ngOnInit(): void {
  }

}
