import { Component, OnInit } from '@angular/core';
import {IStatement, Statement, StatementParameters} from "../../collective-mind-api-clients";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {
  title?: string;
  body?: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatementParameters() : StatementParameters | null {
    if(this.title && this.body) {
      return new StatementParameters({
        title: this.title,
        body: this.body
      });
    }
    return null;

  }

}
