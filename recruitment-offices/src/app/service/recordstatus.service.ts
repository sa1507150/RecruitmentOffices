import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecordStatus } from '../model/recordstatus';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecordStatusService {

  private recordStatusesUrl: string;

  constructor(private http: HttpClient) {
    this.recordStatusesUrl = 'http://localhost:9191/recordStatuses';
  }

  public findAll(): Observable<RecordStatus[]> {
    return this.http.get<RecordStatus[]>(this.recordStatusesUrl);
  }

  public save(recordStatus: RecordStatus) {
    return this.http.post<RecordStatus>(this.recordStatusesUrl, recordStatus);
  }

}
