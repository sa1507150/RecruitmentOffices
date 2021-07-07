import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../model/record';
import { Observable } from 'rxjs/Observable';
import {RecordStatus} from "../model/recordstatus";

@Injectable()
export class RecordService {

  private recordsUrl: string;

  constructor(private http: HttpClient) {
    this.recordsUrl = 'http://localhost:9191/records';
  }

  public findAll(): Observable<Record[]> {
    return this.http.get<Record[]>(this.recordsUrl);
  }

  public save(record: Record) {
    return this.http.post<Record>(this.recordsUrl, record);
  }

  public showRecordStatus(record: Record): Observable<any> {
    return this.http.get<RecordStatus[]>(`${this.recordsUrl}/recordStatus/${record.serialNo}`);
  }


}
