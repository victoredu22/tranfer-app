import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';


@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
})
export class PayeeComponent implements OnInit {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  email: string ="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})" ;
  phone: string = "^[0-9]{8}$";
  rut: string = "^[0-9]+-[0-9kK]{1}$"

  constructor(
    private transactionService: TransactionsService,
    private fb: FormBuilder,
  ) {}
  formPayees: FormGroup = this.fb.group({
    rut: ['', [Validators.required, Validators.pattern(this.rut)]],
    name: [null, [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(this.email)]],
    phone: ['', [Validators.required, Validators.pattern(this.phone)]],

    bank: ['0', [Validators.required, Validators.min(1)]],
    typeAccount: ['0', [Validators.required, Validators.min(1)]],
    numberAccount: ['', [Validators.required, Validators.minLength(3)]],
  });

  listBank: any = [];
  get f(): { [key: string]: AbstractControl } {
    return this.formPayees.controls;
  }

  ngOnInit(): void {
    this.transactionService
      .getBank()
      .subscribe((resp) => (this.listBank = resp));
  }


  guardar() {
     this.transactionService
       .createBank(this.formPayees.value)
       .subscribe((resp) => console.log(resp));
  }
}
