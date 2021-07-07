import { Component, OnInit } from '@angular/core';
import {RecordStatus} from "../model/recordstatus";
import {ActivatedRoute, Router} from "@angular/router";
import {RecordRecordStatusService} from "../service/record-record-status.service";

@Component({
  selector: 'app-record-record-status',
  templateUrl: './record-record-status.component.html',
  styleUrls: ['./record-record-status.component.css']
})
export class RecordRecordStatusComponent implements OnInit {

  serialNo: string;
  recordStatus: RecordStatus;

  constructor(private route: ActivatedRoute,private router: Router,
              private recordRecordStatusService: RecordRecordStatusService) { }

  ngOnInit() {
    this.recordStatus = new RecordStatus();

    this.serialNo = this.route.snapshot.params['serialNo'];

    this.recordRecordStatusService.getRecordStatus(this.serialNo)
      .subscribe(data => {
        console.log(data)
        this.recordStatus = data;
      }, error => console.log(error));
  }

}
