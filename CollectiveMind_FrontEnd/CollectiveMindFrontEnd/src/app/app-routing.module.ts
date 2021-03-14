import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementsComponent} from "./statements/statements.component";

const routes: Routes = [
  {
    path: '',
    component: StatementsComponent,
    children: [
      {
        path: 'statements',
        component: StatementsComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
