import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Submission } from '../model/submission';
import { Observable } from 'rxjs/Observable';
import {RecordStatus} from "../model/recordstatus";
import {Office} from "../model/office";

@Injectable()
export class SubmissionService {

  private submissionsUrl: string;

  submissions: Submission[];

  constructor(private http: HttpClient) {
    this.submissionsUrl = 'http://localhost:9191';
  }

  public findAll(): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.submissionsUrl}/submissions`);
  }

  public save(submission: Submission) {
    return this.http.post<Submission>((`${this.submissionsUrl}/submissions`), submission);
  }

  public getOfficeSubmissions(id: number): Submission[]{
    return this.submissions.filter((h: any) => h.labourLicenseNo === id);
  }

  public getSubmission(id: number): Submission{
    return this.submissions.find((h: any) => h.labourLicenseNo === id);
  }

  public showOfficeSubmissions(labourLicenseNo: number): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.submissionsUrl}/submissionsOfOffice/${labourLicenseNo}`);
  }

}
