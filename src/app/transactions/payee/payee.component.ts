import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
})
export class PayeeComponent implements OnInit {
  constructor(private transactionService: TransactionsService) {}

  ngOnInit(): void {
    this.transactionService.getBank().subscribe((resp) => console.log(resp));
  }
}
