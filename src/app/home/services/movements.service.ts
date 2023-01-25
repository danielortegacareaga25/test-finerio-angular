import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListRespose } from '../interfaces/list';

@Injectable({ providedIn: 'root' })
export class MovementService {
  constructor(private http: HttpClient) {}

  getMovements(user: string, offSet: number, max: number) {
    return this.http.get<ListRespose>(
      `https://api.finerio.mx/api/users/${user}/movements?deep=true&offset=${offSet}&max=${max}&includeCharges=true&includeDeposits=true&includeDuplicates=true`
    );
  }
}
