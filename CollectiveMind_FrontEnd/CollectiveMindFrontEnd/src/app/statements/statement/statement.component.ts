import { Component, OnInit } from '@angular/core';
import {IStatement, NegativeClient, PositiveClient, StatementClient} from "../../collective-mind-api-clients";
import {ActivatedRoute, Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd/modal";
import {WizardComponent} from "../wizard/wizard.component";

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {

  statement?: IStatement;
  positiveArguments: IStatement[] = [];
  negativeArguments: IStatement[] = [];

  statementHistory: string[] = [];

  statementId?: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private statementClient: StatementClient,
              private negativeArgumentsClient: NegativeClient,
              private positiveArgumentsClient: PositiveClient,
              private modalService: NzModalService) {

    this.activatedRoute.params.subscribe(x => this.refresh(x.id))
  }

  ngOnInit(): void {
  }

  refresh(newStatementId: string){
    this.statementId = newStatementId;
    if(!this.statementHistory.some(x => x === newStatementId)) {
      this.statementHistory.push(newStatementId);
    }
    if(this.statementId !== undefined && this.statementId !== null && this.statementId !== ''){
      this.statementClient.get(this.statementId).subscribe(x => this.statement = x);
      this.negativeArgumentsClient.get(this.statementId).subscribe(x => this.negativeArguments = x);
      this.positiveArgumentsClient.get(this.statementId).subscribe(x => this.positiveArguments = x);
    }
  }

  goToLastStatement(){
    const currentStatementId = this.statementHistory.pop();
    const lastStatementId = this.statementHistory.pop();

    if(lastStatementId !== undefined && lastStatementId !== null)
    {
      this.router.navigate(["/statement", lastStatementId])
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
        this.positiveArguments.unshift(x.getStatement());
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
        this.negativeArguments.unshift(x.getStatement());
      }
    });
  }
}
