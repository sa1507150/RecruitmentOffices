import { Component, OnInit } from '@angular/core';
import { RecordService } from '../service/record.service';
import { Record } from '../model/record';
import {RecordStatusListComponent} from "../recordstatus-list/recordstatus-list.component";
import {RecordStatus} from "../model/recordstatus";
import {Router} from "@angular/router";


@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {

  records: Record[];
  recordStatuses: RecordStatus[];

  constructor(private recordService: RecordService, private router: Router) {
  }

  showRecordStatus(serialNo: string){
    this.router.navigate(['recordStatuses', serialNo]);
  }

  ngOnInit() {
    this.recordService.findAll().subscribe(data => {
      this.records = data;
    });
  }

}
