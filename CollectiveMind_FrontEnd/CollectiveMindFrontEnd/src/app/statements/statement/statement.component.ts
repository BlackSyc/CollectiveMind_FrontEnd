import { Component } from '@angular/core';
import {
  NegativeClient,
  PositiveClient,
  Statement,
  StatementClient,
  StatementParameters
} from "../../collective-mind-api-clients";
import {ActivatedRoute, Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";
import {WizardComponent} from "../wizard/wizard.component";
import {StatementNode} from "./statement-node";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent {

  statement: StatementNode | undefined;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private statementClient: StatementClient,
              private negativeArgumentsClient: NegativeClient,
              private positiveArgumentsClient: PositiveClient,
              private modalService: NzModalService) {

    this.statementClient
      .get(this.activatedRoute.snapshot.params.id)
      .subscribe(x => this.select(new StatementNode(x)));
  }

  select(statement: StatementNode, saveNavigation: boolean = true){
    if(saveNavigation) {
      statement.lastNavigation = this.statement;
    }

    this.statement = statement;

    if(this.statement.negativeArguments.length < 1){
      this.negativeArgumentsClient
        .get(this.statement.id)
        .subscribe(x =>
          statement.negativeArguments = x.map(s => new StatementNode(s)));
    }

    if(this.statement.positiveArguments.length < 1){
      this.positiveArgumentsClient
        .get(this.statement.id)
        .subscribe(x =>
          statement.positiveArguments = x.map(s => new StatementNode(s)));
    }

    this.router.navigate(["/statement", statement.id])
  }

  goToLastStatement(){
    if(this.statement?.lastNavigation) {
      this.select(this.statement?.lastNavigation, false);
    }
  }

  createPositiveArgument() {
    this.modalService.create({
      nzWidth: 1200,
      nzIconType: 'book',
      nzTitle: 'New negative argument',
      nzContent: WizardComponent,
      nzComponentParams: { },
      nzOnOk: (x) => {
        const statementParameters = x.getStatementParameters();
        if(statementParameters){
          this.positiveArgumentsClient.create(this.statement!.id, statementParameters)
            .subscribe(x => this.statement?.positiveArguments.unshift(new StatementNode(x)));
        }
        else{
          Promise.reject("Input was not valid.");
        }
      },
    });
  }

  createNegativeArgument(){
    this.modalService.create({
      nzWidth: 1200,
      nzIconType: 'book',
      nzTitle: 'New positive argument',
      nzContent: WizardComponent,
      nzComponentParams: { },
      nzOnOk: (x) => {
        const statementParameters = x.getStatementParameters();
        if(statementParameters){
          this.negativeArgumentsClient.create(this.statement!.id, statementParameters)
            .subscribe(x => this.statement?.negativeArguments.unshift(new StatementNode(x)));
        }
        else{
          Promise.reject("Input was not valid.");
        }
      }
    });
  }
}
