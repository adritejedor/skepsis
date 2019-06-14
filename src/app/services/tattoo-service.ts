import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TattooService {

  constructor(
    private http: HttpClient
  ) { }

  public getTattooCardData() {
    this.http.get('../assets/mocks/card-data.json');
  }
}
