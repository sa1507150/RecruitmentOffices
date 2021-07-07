import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Office } from '../model/office';
import { Observable } from 'rxjs/Observable';
import {Submission} from "../model/submission";

@Injectable()
export class OfficeServiceService {

  private officesUrl: string;

  constructor(private http: HttpClient) {
    this.officesUrl = 'http://localhost:9191';
  }

  public findAll(): Observable<Office[]> {
    return this.http.get<Office[]>(`${this.officesUrl}/offices`);
  }

  public save(office: Office) {
    return this.http.post<Office>((`${this.officesUrl}/offices`), office);
  }

  public showOfficeSubmissions(office: Office){
    return this.http.get<Submission[]>(`${this.officesUrl}/submissionsOfOffice/${office.labourLicenseNo}`);
  }

}
