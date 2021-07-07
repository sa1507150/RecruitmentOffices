import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RecruitmentUserService} from "./recruitment-user.service";
import {RecruitmentUserComponent} from "../recruitment-user/recruitment-user.component";

@Injectable()
export class UploadFileService {

  private baseUrl = 'http://localhost:9191';

  constructor(private http: HttpClient) {
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);


    const req = new HttpRequest('POST', `${this.baseUrl}/upload/222`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

}
