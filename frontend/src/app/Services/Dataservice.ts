import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {
  private baseUrl = 'http://localhost/webdi_v2/backend/public/api';

  constructor(private http: HttpClient) {
  }


  login(data) {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
  profile(id) {
    console.log(id);
    return this.http.post(`${this.baseUrl}/profiles/getProfile`, id);
  }

  test(data) {
    return this.http.post(`${this.baseUrl}/test`, data);
  }
  signup(data) {
    return this.http.post(`${this.baseUrl}/signup`, data);
  }

}
