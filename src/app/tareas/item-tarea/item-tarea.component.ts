import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaModel } from 'src/app/models/tarea.models';


@Component({
  selector: 'ind-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {
  @Input() tarea: TareaModel;
  @Input() index: number;
  @Output() borrar: EventEmitter<any>;

  constructor() {
    this.borrar = new EventEmitter();
  }

  ngOnInit() {
    this.tarea = new TareaModel();
  }

  onClick(ev: Event) {
    this.borrar.next(this.index);
  }
}
