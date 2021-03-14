import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatementsComponent } from './statements/statements.component';
import { SearchComponent } from './statements/search/search.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzPageHeaderModule} from "ng-zorro-antd/page-header";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { ListComponent } from './statements/list/list.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {environment} from "../environments/environment";
import {COLLECTIVE_MIND_API_BASE_URL} from "./collective-mind-api-clients";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzBadgeModule} from "ng-zorro-antd/badge";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import { StatementComponent } from './statements/statement/statement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountComponent } from './account/account.component';
import { AboutComponent } from './about/about.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzEmptyModule} from "ng-zorro-antd/empty";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    StatementsComponent,
    SearchComponent,
    ListComponent,
    StatementComponent,
    DashboardComponent,
    AccountComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzPageHeaderModule,
    NzMenuModule,
    NzButtonModule,
    NzInputModule,
    NzGridModule,
    NzDividerModule,
    NzListModule,
    NzSkeletonModule,
    NzCardModule,
    NzBadgeModule,
    NzToolTipModule,
    NzIconModule,
    NzEmptyModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: en_US },
    {provide: COLLECTIVE_MIND_API_BASE_URL, useValue: environment.apiBaseUrl }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
