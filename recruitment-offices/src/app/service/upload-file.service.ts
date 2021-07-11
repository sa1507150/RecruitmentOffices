import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RecruitmentUserService} from "./recruitment-user.service";
import {RecruitmentUserComponent} from "../recruitment-user/recruitment-user.component";
import {TokenStorageService} from "./token-storage.service";

@Injectable()
export class UploadFileService implements OnInit{

  private baseUrl = 'http://localhost:9191';
  currentUser: any;

  constructor(private http: HttpClient, private token:TokenStorageService) {
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const user = this.token.getUser();

    const req = new HttpRequest('POST', `${this.baseUrl}/upload/${user.username}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
  }

}
