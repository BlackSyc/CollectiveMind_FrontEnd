import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IStatement} from "../../collective-mind-api-clients";

@Component({
  selector: 'statement-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items:IStatement[] = [];
  @Output() onCreateNew: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

}
