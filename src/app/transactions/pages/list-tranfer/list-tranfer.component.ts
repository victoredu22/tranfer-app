import { Component, OnInit } from '@angular/core';
import { bank } from '../../interface/bank.interface';
import { Payees } from '../../interface/payees.interface';
import { Tranfer } from '../../interface/tranfer.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-list-tranfer',
  templateUrl: './list-tranfer.component.html',
})
export class ListTranferComponent implements OnInit {
  constructor(private transactionService: TransactionsService) {}

  tranfer: Tranfer[] = [];
  listBank: bank = {};

  typeAccount(arg: number) {
    switch (arg) {
      case 1: 
        return "Corriente"
      case 2:
        return "Corriente"
      case 3:
        return "Corriente"
      case 4:
        return "Corriente"
      default:
        return "-";
    }
  }

  typeBank(arg: number){
    const type = this.listBank.find((bank: bank) =>bank.code === arg);
    return type.name
  }
  ngOnInit(): void {
    this.transactionService
      .getTranfer()
      .subscribe((resp) => (this.tranfer = resp));

    this.transactionService
      .getBank()
      .subscribe((resp) => (this.listBank = resp));
  }
}
