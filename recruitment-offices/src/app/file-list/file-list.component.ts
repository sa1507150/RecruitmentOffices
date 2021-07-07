import { Component, OnInit } from '@angular/core';
import {File} from "../model/file";
import {FileService} from "../service/file.service";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files: File[];

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.fileService.findAll().subscribe(data => {
      this.files = data;
    });
  }

}
