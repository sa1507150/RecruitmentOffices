import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {File} from "../model/file";


@Injectable()
export class FileService {

  private filesUrl: string;

  constructor(private http: HttpClient) {
    this.filesUrl = 'http://localhost:9191/files';
  }

  public findAll(): Observable<File[]> {
    return this.http.get<File[]>(this.filesUrl);
  }

  public save(file: File) {
    return this.http.post<File>(this.filesUrl, file);
  }

}
