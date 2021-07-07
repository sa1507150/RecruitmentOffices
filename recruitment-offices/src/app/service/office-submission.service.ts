import { Injectable } from '@angular/core';
import {Submission} from "../model/submission";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class OfficeSubmissionService {

  private submissionsUrl: string;

  submissions: Submission[];

  constructor(private http: HttpClient) {
    this.submissionsUrl = 'http://localhost:9191/submissions';
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

  public showOfficeSubmissions(labourLicenseNo: string): Observable<Submission[]> {
    return this.http.get<Submission[]>(`${this.submissionsUrl}/${labourLicenseNo}`);
  }


  public getSubmission(id: number): Submission{
    return this.submissions.find((h: any) => h.labourLicenseNo === id);
  }


}
