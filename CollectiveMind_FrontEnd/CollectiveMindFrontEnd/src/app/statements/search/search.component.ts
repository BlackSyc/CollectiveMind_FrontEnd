import { Component, OnInit } from '@angular/core';
import {IStatement, StatementClient} from "../../collective-mind-api-clients";

@Component({
  selector: 'statement-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchFilter?:string;
  searchResult: IStatement[] = [];

  constructor(private statementClient:StatementClient) { }

  ngOnInit(): void {
  }

  searchStatements() {
    if(this.searchFilter === undefined){
      return;
    }
    this.statementClient.search(this.searchFilter, 0, 100)
      .subscribe(x => {
        this.searchResult = x;
    })
  }

  clearResults() {
    this.searchResult = [];
  }
}
