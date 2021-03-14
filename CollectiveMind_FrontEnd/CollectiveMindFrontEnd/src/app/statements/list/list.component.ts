import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'statement-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public items:string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = ["truus", "jantje", "enzo"];
  }

}
