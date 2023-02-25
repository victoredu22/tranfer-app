import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import { Payees } from '../../interface/payees.interface';
import {
  Validators,
  FormBuilder,
  FormGroup,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-create-tranfer',
  templateUrl: './create-tranfer.component.html',
})
export class CreateTranferComponent implements OnInit {
  constructor(
    private transactionService: TransactionsService,
    private fb: FormBuilder
  ) {}

  formTransfer: FormGroup = this.fb.group({
    amount: [
      null,
      [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(4),
      ],
    ],
    selectedUser: [null, [Validators.required, Validators.min(1)]],
  });

  payees: Payees[] = [];
  selectedUser!: Payees;

  get f(): { [key: string]: AbstractControl } {
    return this.formTransfer.controls;
  }

  keyword = 'name';

  selectEvent(item: any) {
    const { email } = item;
    this.transactionService
      .getPayesByEmail(email)
      .subscribe((resp) =>
        this.formTransfer.patchValue({ selectedUser: resp })
      );
  }

  ngOnInit(): void {
    this.transactionService
      .getPayes()
      .subscribe((resp) => (this.payees = resp));
  }
  submit() {
    const data = {
      rut: this.formTransfer.value.selectedUser.rut,
      amount: this.formTransfer.value.amount,
    };

    this.transactionService
      .createTranfer(data)
      .subscribe((resp) => console.log(resp));
  }
}
