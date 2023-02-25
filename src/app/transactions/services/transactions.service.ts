import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payees } from '../interface/payees.interface';
import { bank } from '../interface/bank.interface';
import { Tranfer } from '../interface/tranfer.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseUrl: string = 'https://node-tranfer.herokuapp.com/api';

  constructor(private http: HttpClient) {}

  getBank(): Observable<bank[]> {
    return this.http.get<bank[]>(`${this.baseUrl}/bank`);
  }

  createBank(payees: Payees): Observable<Payees>{   
    return this.http.post<Payees>(`${ this.baseUrl}/payees`, payees );
  }

  getPayes(): Observable<Payees[]> {
    return this.http.get<Payees[]>(`${this.baseUrl}/payees`);
  }

  getPayesByEmail(email:string): Observable<Payees> {
    return this.http.get<Payees>(`${this.baseUrl}/payees/${email}`);
  }
  createTranfer(data:any):Observable <any>{
    return this.http.post<any>(`${this.baseUrl}/tranfer`, data);
  }

  getTranfer():Observable <Tranfer[]>{
    return this.http.get<Tranfer[]>(`${this.baseUrl}/tranfer`);
  }



}
