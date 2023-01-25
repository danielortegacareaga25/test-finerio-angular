import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeResponse } from '../interfaces/me.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getMe() {
    return this.http.get<MeResponse>(`https://api.finerio.mx/api/me`);
  }
}
