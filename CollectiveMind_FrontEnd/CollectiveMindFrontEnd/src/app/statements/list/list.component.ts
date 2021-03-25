import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StatementNode} from "../statement/statement-node";

@Component({
  selector: 'statement-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items:StatementNode[] = [];
  @Output() onCreateNew: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelect: EventEmitter<StatementNode> = new EventEmitter<StatementNode>();
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
