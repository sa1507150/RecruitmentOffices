import { Injectable } from '@angular/core';
import {RecordStatus} from "../model/recordstatus";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Record} from "../model/record";
import {Submission} from "../model/submission";

@Injectable()
export class SubmissionRecordService {

  private submissionRecordsUrl: string;

  records: Record[];
  submissions: Submission[];

  constructor(private http: HttpClient) {
    this.submissionRecordsUrl = 'http://localhost:9191/records';
  }

  public findAll(): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.submissionRecordsUrl}/records`);
  }

  public save(record: Record) {
    return this.http.post<Record>((`${this.submissionRecordsUrl}/records`), record);
  }

  public getSubmissionRecords(id: number): Record[]{
    return this.records.filter((h: any) => h.serialNo === id);
  }

  public showSubmissionRecords(id: string): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.submissionRecordsUrl}/${id}`);
  }


  public getSubmission(id: number): Submission{
    return this.submissions.find((h: any) => h.labourLicenseNo === id);
  }

}
