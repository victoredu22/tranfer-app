import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private baseUrl: string = 'http://127.0.0.1:5000/api';

  constructor(private http: HttpClient) {}

  getBank(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/bank`);
  }
}
