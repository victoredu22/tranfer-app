import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTranferComponent } from './pages/create-tranfer/create-tranfer.component';
import { ListTranferComponent } from './pages/list-tranfer/list-tranfer.component';
import { PayeeComponent } from './pages/payees/payee.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nuevo-destinatario',
        component: PayeeComponent,
      },
      {
        path: 'nueva-tranferencia',
        component: CreateTranferComponent
      },
      {
        path: 'historial',
        component: ListTranferComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TransactionsRoutingModule {}
