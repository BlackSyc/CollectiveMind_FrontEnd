import { Component, OnInit } from '@angular/core';
import {IStatement, Statement} from "../../collective-mind-api-clients";

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getStatement() : IStatement {
    return new Statement({
      title: "hoi",
      body: "hallo",
      id: ""
    });
  }

}
