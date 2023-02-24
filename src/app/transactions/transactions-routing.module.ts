import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayeeComponent } from './payee/payee.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nuevo-destinatario',
        component: PayeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TransactionsRoutingModule {}
