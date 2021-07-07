import { Component, OnInit } from '@angular/core';
import {Record} from "../model/record";
import {OfficeSubmissionService} from "../service/office-submission.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SubmissionRecordService} from "../service/submission-record.service";

@Component({
  selector: 'app-submission-record',
  templateUrl: './submission-record.component.html',
  styleUrls: ['./submission-record.component.css']
})
export class SubmissionRecordComponent implements OnInit {

  submissionId: string;
  records: Record[];


  constructor(private submissionRecordService: SubmissionRecordService, private router: Router, private route: ActivatedRoute) {
  }

  showRecordStatus(serialNo: string){
    this.router.navigate(['recordStatuses', serialNo]);
  }


  ngOnInit() {

    this.submissionId = this.route.snapshot.params['id'];

    this.submissionRecordService.showSubmissionRecords(this.submissionId).subscribe(data => {
      console.log(data)
      this.records = data;
    }, error => console.log(error));

  }

}
