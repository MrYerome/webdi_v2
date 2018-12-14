import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost/webdi_v2/backend/public/Api';

  constructor(private http: HttpClient) {
  }


  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  test(data) {
    return this.http.post(`${this.baseUrl}/test`, data);
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

}
