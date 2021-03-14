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
import { BranchComponent } from './statements/branch/branch.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzDividerModule} from "ng-zorro-antd/divider";
import { ListComponent } from './statements/list/list.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    StatementsComponent,
    SearchComponent,
    BranchComponent,
    ListComponent
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
    NzSkeletonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
