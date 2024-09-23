import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { ToDo } from '../../interfaces/to-do';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() toDo!: ToDo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();

}