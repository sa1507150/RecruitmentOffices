import { Component, OnInit } from '@angular/core';
import {Submission} from "../model/submission";
import {SubmissionService} from "../service/submission.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {OfficeSubmissionService} from "../service/office-submission.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-office-submissions',
  templateUrl: './office-submissions.component.html',
  styleUrls: ['./office-submissions.component.css']
})
export class OfficeSubmissionsComponent implements OnInit {

  labourLicenseNo: string;
  submissions: Submission[];


  constructor(private officeSubmissionService: OfficeSubmissionService, private router: Router, private route: ActivatedRoute) {
  }

  showSubmissionRecords(id: string) {
    this.router.navigate(['records', id]);
  }


  ngOnInit() {

    this.labourLicenseNo = this.route.snapshot.params['labourLicenseNo'];

    this.officeSubmissionService.showOfficeSubmissions(this.labourLicenseNo).subscribe(data => {
        console.log(data)
        this.submissions = data;
      }, error => console.log(error));

  }

}
