import { Component, OnInit } from '@angular/core';
import { StatementClient} from "../../collective-mind-api-clients";
import {StatementNode} from "../statement/statement-node";
import {Router} from "@angular/router";

@Component({
  selector: 'statement-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchFilter?:string;
  searchResult: StatementNode[] = [];

  constructor(private statementClient: StatementClient,
              private router: Router) { }

  ngOnInit(): void {
  }

  searchStatements() {
    if(this.searchFilter === undefined){
      return;
    }
    this.statementClient.search(this.searchFilter, 0, 100)
      .subscribe(x => {
        this.searchResult = x.map(s => new StatementNode(s));
    })
  }

  clearResults() {
    this.searchResult = [];
  }

  openStatement(statementNode: StatementNode) {
    this.router.navigate(["/statement", statementNode.id]);
  }
}
