import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementsComponent} from "./statements/statements.component";
import {StatementComponent} from "./statements/statement/statement.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AccountComponent} from "./account/account.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {
    path: 'home',
    component: StatementsComponent,
    children: [
      {
        path: 'statements',
        component: StatementsComponent
      }
      ]
  },
  {path: 'statement/:id', component: StatementComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'account', component: AccountComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
