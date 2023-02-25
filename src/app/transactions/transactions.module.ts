import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PayeeComponent } from './pages/payees/payee.component';
import { CreateTranferComponent } from './pages/create-tranfer/create-tranfer.component';

import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ListTranferComponent } from './pages/list-tranfer/list-tranfer.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    PayeeComponent,
    CreateTranferComponent,
    ListTranferComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    ReactiveFormsModule,
    AutocompleteLibModule
  ],
  exports: [RouterModule],
})
export class TransactionsModule { }
