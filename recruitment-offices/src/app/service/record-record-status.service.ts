import { Injectable } from '@angular/core';
import {Submission} from "../model/submission";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {RecordStatus} from "../model/recordstatus";

@Injectable()
export class RecordRecordStatusService {

  private recordStatusesUrl: string;

  recordStatuses: RecordStatus[];
  recordStatus: RecordStatus;

  constructor(private http: HttpClient) {
    this.recordStatusesUrl = 'http://localhost:9191/recordStatuses';
  }

  getRecordStatus(serialNo: string): Observable<any> {
    return this.http.get(`${this.recordStatusesUrl}/${serialNo}`);
  }

  public getRecordStatuses(serialNo: string): RecordStatus[]{
    return this.recordStatuses.filter((h: any) => h.serialNo === serialNo);
  }

  public showRecordStatus(serialNo: string): Observable<RecordStatus[]> {
    return this.http.get<RecordStatus[]>(`${this.recordStatusesUrl}/${serialNo}`);
  }


  // public getRecordStatus(serialNo: string): RecordStatus{
  //   return this.recordStatuses.find((h: any) => h.serialNo === serialNo);
  // }

}
