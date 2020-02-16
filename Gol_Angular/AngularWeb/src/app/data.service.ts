import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Airplane } from './airplane/airplane';
import $ from 'jquery';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  _url = "https://localhost:44368/api/airplane";

  getAirplanes() {

    return this.http.get(this._url);
  }

  getAirplane(id) {
    return this.http.get(this._url + "/" + id);
  }

  createAirplane(airplane: Airplane) {
    var obj = JSON.stringify(airplane);
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.post<any>(this._url, obj, { headers: header });
  }

  updateAirplane(airplane: Airplane) {
    var obj = JSON.stringify(airplane);
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.http.put<any>(this._url + "/" + airplane.Id, obj, { headers: header });
  }



  deleteAirplane(id) {
    return this.http.delete<any>(this._url + "/" + id);
  }
}